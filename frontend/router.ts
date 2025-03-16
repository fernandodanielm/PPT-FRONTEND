// router.ts
import { state, stateFunctions } from "./state";
import { ShortId } from "./pages/short-id/short-id";
import { InstructionsPage } from "./pages/instructions/instructions";
import { PlayPage } from "./pages/play/play";
import { TuNombre } from "./pages/tu-nombre/tu-nombre";
import { ResultPage } from "./pages/result/result";
import { WelcomePage } from "./pages/welcome/welcome";
import { IngresarASala } from "./pages/ingresar-a-sala/ingresar-a-una-sala";

interface RoutePath {
  pathRegex: RegExp;
  render: (params?: { [key: string]: string }) => HTMLElement | Promise<HTMLElement>;
}

const routes: RoutePath[] = [
  {
    pathRegex: /^\/$/,
    render: () => new WelcomePage(),
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
    pathRegex: /^\/short-id\/(?<roomId>[a-zA-Z0-9]+)$/,
    render: (params) => {
      const roomId = params?.roomId; // Obtener roomId del objeto params
      return new ShortId(); // Pasar roomId al constructor de ShortId
    },
  },
  {
    pathRegex: /^\/ingresar-a-sala$/,
    render: () => new IngresarASala(),
  },
];

function goTo(path: string) {
  window.history.pushState({}, "", path);
  renderPath(path);
}

function renderPath(path: string): void {
    const route = routes.find((route) => route.pathRegex.test(path));
    if (route) {
      const app = document.getElementById("app");
      if (app) {
        app.innerHTML = "";
        const match = path.match(route.pathRegex);
        const params: { [key: string]: string } = match?.groups || {};
        const element = route.render(params);
        if (element instanceof Promise) {
          element
            .then((resolvedElement) => {
              app.appendChild(resolvedElement);
            })
            .catch((error) => {
              console.error("Error al renderizar la ruta:", error);
            });
        } else {
          app.appendChild(element);
        }
      } else {
        console.warn("Elemento #app no encontrado.");
      }
    } else {
      console.warn(`Ruta no encontrada: ${path}`);
    }
  }

function getCleanPathFromURL() {
  const fullPath = window.location.pathname;
  const basePath = '/PPT-FRONTEND';
  if (fullPath.startsWith(basePath)) {
    return fullPath.replace(basePath, "") || "/";
  }
  return fullPath;
}


export function initRouter(): void {
    const initialPath = getCleanPathFromURL();
    console.log("Ruta inicial:", initialPath);
    renderPath(initialPath);
}

const router = {
    goTo: async (path: string) => {
      window.history.pushState({}, "", path);
      await renderPath(path);
    },
  };

export {router};