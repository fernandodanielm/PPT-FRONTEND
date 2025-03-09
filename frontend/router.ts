import { ShortId } from "./pages/shortID";
import { InstructionsPage } from "./pages/instructions";
import { PlayPage } from "./pages/play";
import { TuNombre } from "./pages/tu-nombre";
import { ResultPage } from "./pages/result";
import { Welcome } from "./pages/welcome";
import { IngresarASala } from "./pages/ingresar-a-una-sala"

interface RouterPath {
    pathRegex: RegExp;
    render: (params?: any) => HTMLElement | Promise<HTMLElement>;
}

const routes: RouterPath[] = [
    {
        pathRegex: /^\/$/,
        render: () => new Welcome(),
    },
    {
        pathRegex: /^\/instructions$/,
        render: () => new InstructionsPage(),
    },
    {
        pathRegex: /^\/play$/,
        render: () => new PlayPage(),
    },
    {
        pathRegex: /^\/result$/,
        render: () => new ResultPage(),
    },
    {
        pathRegex: /^\/tu-nombre$/,
        render: () => new TuNombre(),
    },
    {
        pathRegex: /^\/ingresar-a-sala$/,
        render: () => new IngresarASala(),
    },
    {
        pathRegex: /^\/short-id$/,
        render: (params) => {
            const shortIdPage = new ShortId();
            // Pasar el roomId a ShortId si existe en los parámetros
            if (params && params[1]) {
                shortIdPage.setRoomId(params[1]);
            }
            return shortIdPage;
        },
    },
    {
        pathRegex: /^\/rooms\/(\d+)\/join$/,
        render: async (params) => {
            const roomId = params[1];
            const tuNombrePage = new TuNombre();
            await tuNombrePage.setRoomId(roomId);
            return tuNombrePage;
        },
    },
];

function goTo(path: string, params?: any) {
    window.history.pushState({}, "", path);
    renderPath(path, params);
}

(window as any).goTo = goTo;

async function renderPath(path: string, params?: any): Promise<void> {
    const route = routes.find((route) => route.pathRegex.test(path));

    if (route) {
        const app = document.getElementById("app");
        if (app) {
            app.innerHTML = "";
            const rendered = route.render(route.pathRegex.exec(path));
            if (rendered instanceof Promise) {
                app.appendChild(await rendered);
            } else {
                app.appendChild(rendered);
            }
        }
    } else {
        console.warn(`El path '${path}' no fue encontrado.`);
    }
}

function getCleanPathFromURL() {
    const fullPath = window.location.pathname;
    const basePath = '/PPT-FRONTEND';
    if (fullPath.startsWith(basePath)) {
        return fullPath.replace(basePath, '') || '/';
    }
    return fullPath;
}

export function initRouter(): void {
    const initialPath = getCleanPathFromURL();
    renderPath(initialPath);
}
  
