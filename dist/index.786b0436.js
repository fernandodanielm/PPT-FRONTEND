function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},r={},a=t.parcelRequire94c2;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequire94c2=a),(0,a.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,r=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)r.set(t[o],{baseUrl:e,path:t[o+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["h2yyf","index.786b0436.js","28hUx","piedrapapelotijera.a2838792.jpg","80kxP","piedra.2b6b2e59.png","bS7qZ","tijera.4b8c96df.png","eEgVe","papel.7c3d639f.png"]'));const n={currentGame:{data:{player1Name:"",player2Name:"",player1Play:null,player2Play:null,statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}},gameOver:!1,readyForNextRound:!1},shortId:null},listeners:[],getState(){return this},setState(e){for(let t of(this.currentGame=e.currentGame,this.listeners))t(e)},subscribe(e){this.listeners.push(e)},setPlayerName(e){let t=this.getState();t.name=e,this.setState(t)},async createRoom(){let e=await fetch("https://ppt-backend-three.vercel.app/api/rooms",{method:"POST"}),t=await e.json(),o=n.getState();return o.currentGame.shortId=t.roomId,n.setState(o),t.roomId},async joinRoom(e,t){let o=await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${e}/join`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({playerName:t})});return(await o.json()).playerNumber},async setMove(e,t,o){await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${e}/move`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({playerNumber:t,move:o})})},async resetGame(){let e=this.getState(),t=e.currentGame.shortId;if(t)try{let o=await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${t}/reset`,{method:"PUT"});if(!o.ok)throw Error(`Error al reiniciar la sala: ${o.statusText}`);e.currentGame.data={player1Name:"",player2Name:"",player1Play:null,player2Play:null,statistics:{player1:{wins:0,losses:0,draws:0},player2:{wins:0,losses:0,draws:0}},gameOver:!1,readyForNextRound:!1},this.setState(e)}catch(e){console.error("Error al reiniciar la sala:",e),alert("Hubo un error al reiniciar la sala. Inténtalo de nuevo.")}}};var i={};i=new URL("piedrapapelotijera.a2838792.jpg",import.meta.url).toString();var s={};s=new URL("piedra.2b6b2e59.png",import.meta.url).toString();var l={};l=new URL("tijera.4b8c96df.png",import.meta.url).toString();var d={};d=new URL("papel.7c3d639f.png",import.meta.url).toString();class p extends HTMLElement{constructor(){super(),this.roomId=null,this.shadow=this.attachShadow({mode:"open"})}setRoomId(e){this.roomId=e}async connectedCallback(){let e=window.location.pathname.split("/");if(this.roomId=e[e.length-1]||null,console.log("ShortId: roomId recibido:",this.roomId),!this.roomId){console.error("ShortId: roomId no encontrado en la URL."),window.goTo("/");return}console.log("ShortId: roomId válido. Continuando con la espera de jugadores."),await this.waitForBothPlayers(),this.render()}async waitForBothPlayers(){return new Promise(e=>{let t=setInterval(async()=>{try{let o=n.getState().currentGame.data,r=o.player1Name,a=o.player2Name;console.log("ShortId: Esperando jugadores. Owner:",r,"Guest:",a),r&&a&&(clearInterval(t),console.log("ShortId: Ambos jugadores listos."),e(!0))}catch(e){console.error("Error en waitForBothPlayers:",e)}},1e3)})}render(){if(this.shadow){let t=n.getState(),o=this.roomId||t.currentGame.shortId,r=t.currentGame.data.player1Name,a=t.currentGame.data.player2Name;console.log("ShortId: Renderizando con roomId:",o),console.log("ShortId: Owner:",r,"Guest:",a),r&&a?(this.shadow.innerHTML=`
                    <div class="short-id-container">
                        <div class="header">
                            <div class="players">
                                <p>${r}</p>
                                <p>${a}</p>
                            </div>
                            <div class="room-info">
                                <p>Sala</p>
                                <p>${o}</p>
                            </div>
                        </div>
                        <div class="share-code">Compart\xed el c\xf3digo:</div>
                        <div class="room-id">${o}</div>
                        <div class="share-with">Con tu contrincante</div>
                        <div class="moves">
                            <img src="${e(s)}" alt="Piedra">
                            <img src="${e(d)}" alt="Papel">
                            <img src="${e(l)}" alt="Tijera">
                        </div>
                    </div>
                `,console.log("ShortId: Ambos jugadores listos. Redirigiendo a /instructions."),window.goTo("/instructions")):this.shadow.innerHTML=`
                    <div class="short-id-container">
                        <p>Esperando a que ambos jugadores se unan a la sala...</p>
                    </div>
                `;let p=document.createElement("style");p.textContent=`
                .short-id-container {
                    background-image: url(${e(i)});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    font-family: 'Arial Rounded MT Bold', sans-serif;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    margin-bottom: 20px;
                }

                .players, .room-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .share-code {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #333;
                }

                .room-id {
                    font-size: 36px;
                    margin-bottom: 10px;
                    color: #007bff;
                }

                .share-with {
                    font-size: 18px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .moves {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                }

                .moves img {
                    width: 80px;
                    height: 80px;
                    margin: 0 10px;
                }

                @media (min-width: 768px) {
                    .moves img {
                        width: 120px;
                        height: 120px;
                    }
                }
            `,this.shadow.appendChild(p)}}}customElements.define("short-id",p);class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){if(!n.getState().currentGame.shortId){window.goTo("/");return}this.render()}render(){if(this.shadow){this.shadow.innerHTML=`
                <div class="instructions-container">
                    <h3>Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
                    <button class="button" id="play-button">Jugar</button>
                </div>
            `;let t=this.shadow.querySelector("#play-button");t&&t.addEventListener("click",()=>{window.goTo("/play")});let o=document.createElement("style");o.textContent=`
                @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

                .instructions-container {
                    background-image: url(${e(i)});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    font-family: 'Odibee Sans', cursive;
                }

                h3 {
                    font-size: 32px;
                    margin-bottom: 30px;
                    color: #333;
                    padding: 0 20px;
                }

                .button {
                    width: 322px;
                    height: 87px;
                    border: none;
                    background-color: #2979FF;
                    color: white;
                    font-size: 24px;
                    margin-top: 20px;
                    border-radius: 6px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: bold;
                    border: 15px solid #1976D2;
                    font-family: 'Odibee Sans', cursive;
                }

                .button:hover {
                    background-color: #0056b3;
                }

                @media (min-width: 768px) {
                    .instructions-container {
                        padding: 40px;
                    }

                    h3 {
                        font-size: 48px;
                    }

                    .button {
                        width: 400px;
                        height: 100px;
                        font-size: 32px;
                    }
                }
            `,this.shadow.appendChild(o)}}}customElements.define("instructions-page",c);class m extends HTMLElement{constructor(){super(),this.roomId=null,this.playerNumber=1,this.shadow=this.attachShadow({mode:"open"})}async connectedCallback(){let e=n.getState();this.roomId=e.currentGame.shortId;let t=e.currentGame.data.player1Name,o=e.currentGame.data.player2Name;if(t&&(this.playerNumber=o?2:1),!this.roomId){window.goTo("/");return}this.render(),await this.waitForGameResult()}async waitForGameResult(){return new Promise(e=>{n.subscribe(async t=>{t.currentGame.data.gameOver&&(e(!0),window.goTo("/result"))})})}render(){let t=this.shadow;if(t){t.innerHTML=`
                <div class="play-container">
                    <h1>Elige tu jugada</h1>
                    <div class="timer">
                        <span id="timer">3</span>
                    </div>
                    <div class="moves">
                        <button id="piedra"><img src="${e(s)}" alt="Piedra"></button>
                        <button id="papel"><img src="${e(d)}" alt="Papel"></button>
                        <button id="tijera"><img src="${e(l)}" alt="Tijera"></button>
                    </div>
                </div>
            `;let o=t.querySelector(".moves"),r=t.querySelector("#timer"),a=t.querySelector(".timer"),p=3;a.style.animation=`countdown ${p}s linear forwards`;let c=setInterval(()=>{p--,r&&(r.textContent=p.toString()),0===p&&(clearInterval(c),o&&(o.style.display="none"))},1e3);o?.addEventListener("click",async e=>{let o=e.target.closest("button");if(o){clearInterval(c),t.querySelectorAll(".moves button").forEach(e=>{let t=e.querySelector("img");e===o?t?.classList.add("selected"):t?.classList.add("unselected")});let e=o.id;this.roomId?await n.setMove(this.roomId,this.playerNumber,e):console.error("roomId es null. No se puede realizar el movimiento.")}});let m=document.createElement("style");m.textContent=`
                .play-container {
                    background-image: url(${e(i)});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                }

                h1 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .timer {
                    font-size: 48px;
                    margin-bottom: 30px;
                    color: #333;
                    position: relative;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 5px solid #333;
                }

                .timer::before {
                    content: "";
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    border-radius: 50%;
                    border: 5px solid transparent;
                    border-top-color: #333;
                    animation: spin 3s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes countdown {
                    0% {
                        stroke-dasharray: 283;
                        stroke-dashoffset: 0;
                    }
                    100% {
                        stroke-dasharray: 283;
                        stroke-dashoffset: 283;
                    }
                }

                .moves {
                    display: flex;
                    justify-content: center;
                }

                .moves button {
                    background: none;
                    border: none;
                    padding: 10px;
                    margin: 0 10px;
                    cursor: pointer;
                }

                .moves img {
                    width: 100px;
                    height: 100px;
                    transition: transform 0.3s ease;
                }

                .moves img.selected {
                    transform: scale(1.2);
                }

                .moves img.unselected {
                    opacity: 0.5;
                }

                @media (min-width: 768px) {
                    h1 {
                        font-size: 48px;
                    }

                    .moves img {
                        width: 150px;
                        height: 150px;
                    }
                }
            `,t.appendChild(m)}}}customElements.define("play-page",m);class h extends HTMLElement{setRoomId(e){this.roomId=e}connectedCallback(){this.render()}render(){this.innerHTML=`
            <div class="tu-nombre-container">
                <h2>Ingresa tu nombre</h2>
                <form class="nombre-form">
                    <input type="text" name="nombre" placeholder="Tu nombre">
                    <button class="button" type="submit">Unirse a la sala</button>
                </form>
            </div>
        `;let t=this.querySelector(".nombre-form");t.addEventListener("submit",async e=>{e.preventDefault();let o=t.nombre.value;if(this.roomId)try{console.log("Llamando a la API con roomId:",this.roomId,"y nombre:",o);let e=await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${this.roomId}/join`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({playerName:o})});if(console.log("Respuesta de la API:",e),!e.ok)throw Error(`Error al unirse a la sala: ${e.statusText}`);let t=await e.json();console.log(t);let r=t.playerNumber;n.setPlayerName(o),1===r?window.goTo(`/short-id/${this.roomId}`):window.goTo("/play")}catch(e){console.error("Error al unirse a la sala:",e),alert("Hubo un error al unirse a la sala. Inténtalo de nuevo.")}});let o=document.createElement("style");o.textContent=`
            @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

            .tu-nombre-container {
                background-image: url(${e(i)});
                background-size: cover;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;
                font-family: 'Odibee Sans', cursive;
            }

            h2 {
                font-size: 36px;
                margin-bottom: 30px;
                color: #333;
            }

            .nombre-form {
                display: flex;
                flex-direction: column;
                width: 80%;
                max-width: 400px;
            }

            input[type="text"] {
                padding: 15px;
                margin-bottom: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
            }

            .button {
                width: 322px;
                height: 87px;
                border: none;
                background-color: #2979FF;
                color: white;
                font-size: 24px;
                margin-top: 20px;
                border-radius: 6px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: bold;
                border: 15px solid #1976D2;
                font-family: 'Odibee Sans', cursive;
            }

            .button:hover {
                background-color: #0056b3;
            }

            @media (min-width: 768px) {
                h2 {
                    font-size: 48px;
                }

                .nombre-form {
                    width: 60%;
                }

                input[type="text"] {
                    font-size: 20px;
                }

                .button {
                    width: 400px;
                    height: 100px;
                    font-size: 32px;
                }
            }
        `,this.appendChild(o)}constructor(...e){super(...e),this.roomId=null}}customElements.define("tu-nombre",h);class u extends HTMLElement{constructor(){super(),this.roomId=null,this.shadow=this.attachShadow({mode:"open"})}setRoomId(e){this.roomId=e}async connectedCallback(){if(!this.roomId){let e=n.getState();this.roomId=e.currentGame.shortId}if(!this.roomId){window.goTo("/");return}let e=await this.getGameResult();this.render(e)}async getGameResult(){try{let e=await fetch(`https://ppt-backend-three.vercel.app/api/rooms/${this.roomId}`);if(!e.ok)throw Error(`Error al obtener los resultados del juego: ${e.statusText}`);return await e.json()}catch(e){return console.error("Error al obtener los resultados del juego:",e),alert("Hubo un error al obtener los resultados del juego. Inténtalo de nuevo."),null}}render(t){let o=this.shadow;if(!t)return;let{player1Name:r,player2Name:a,player1Play:s,player2Play:l,statistics:d}=t,p="Es un empate.";if(p=s===l?"Es un empate.":"piedra"===s&&"tijera"===l||"tijera"===s&&"papel"===l||"papel"===s&&"piedra"===l?"¡Ganaste!":"Perdiste.",o){o.innerHTML=`
                <div class="result-container">
                    <div class="star"></div>
                    <h1>${p}</h1>
                    <h2>Resultados</h2>
                    <p>${r} jug\xf3: ${s}</p>
                    <p>${a} jug\xf3: ${l}</p>
                    <p>Victorias de ${r}: ${d[r].wins}</p>
                    <p>Derrotas de ${r}: ${d[r].losses}</p>
                    <p>Empates de ${r}: ${d[r].draws}</p>
                    <p>Victorias de ${a}: ${d[a].wins}</p>
                    <p>Derrotas de ${a}: ${d[a].losses}</p>
                    <p>Empates de ${a}: ${d[a].draws}</p>
                    <button class="button" id="play-again-button">Volver a jugar</button>
                </div>
            `;let t=o.querySelector("#play-again-button");t&&t.addEventListener("click",()=>{n.resetGame(),window.goTo("/play")});let c=document.createElement("style");c.textContent=`
                @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

                .result-container {
                    background-image: url(${e(i)});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    font-family: 'Odibee Sans', cursive;
                }

                h1 {
                    font-size: 48px;
                    margin-bottom: 20px;
                    color: #333;
                }

                h2 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                p {
                    font-size: 24px;
                    margin-bottom: 10px;
                    color: #333;
                }

                .button {
                    width: 322px;
                    height: 87px;
                    border: none;
                    background-color: #2979FF;
                    color: white;
                    font-size: 24px;
                    margin-top: 20px;
                    border-radius: 6px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: bold;
                    border: 15px solid #1976D2;
                    font-family: 'Odibee Sans', cursive;
                }

                .button:hover {
                    background-color: #0056b3;
                }

                @media (min-width: 768px) {
                    .result-container {
                        padding: 40px;
                    }

                    h1 {
                        font-size: 64px;
                    }

                    h2 {
                        font-size: 48px;
                    }

                    p {
                        font-size: 32px;
                    }

                    .button {
                        width: 400px;
                        height: 100px;
                        font-size: 32px;
                    }
                }
            `,o.appendChild(c)}}}customElements.define("result-page",u);class g extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadow){this.shadow.innerHTML=`
                <style>
                    body {
                        background-color: white;
                    }
                    .welcome-container {
                        width: 375px;
                        height: 667px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-image: url(${e(i)});
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
                    .title-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 20px;
                    }
                    h1 {
                        font-size: 36px;
                        text-align: center;
                        background: linear-gradient(to right, green, lightgreen);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-family: 'Arial Rounded MT Bold', sans-serif;
                    }
                    .button {
                        width: 322px;
                        height: 87px;
                        border: none;
                        background-color: #2979FF;
                        color: white;
                        font-size: 24px;
                        margin-top: 20px;
                        border-radius: 6px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-weight: bold;
                        border: 15px solid #1976D2;
                    }
                    @media (min-width: 965px) {
                        .welcome-container {
                            width: 1280px;
                            height: 720px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                </style>
                <div class="welcome-container">
                    <div class="title-container">
                        <h1>Piedra</h1>
                        <h1>Papel \xf3</h1>
                        <h1>Tijera</h1>
                    </div>
                    <button class="button" id="new-game-button">Nuevo Juego</button>
                    <button class="button" id="join-room-button">Ingresa a una sala</button>
                </div>
            `;let t=this.shadow.querySelector("#new-game-button"),o=this.shadow.querySelector("#join-room-button");t&&t.addEventListener("click",async()=>{let e=await n.createRoom();window.goTo(`/rooms/${e}/join`)}),o&&o.addEventListener("click",()=>{window.goTo("/ingresar-a-sala")})}}}customElements.define("welcome-page",g);class x extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){if(this.shadow){this.shadow.innerHTML=`
                <div class="ingresar-sala-container">
                    <h2>Ingresa el c\xf3digo de la sala</h2>
                    <form class="sala-form">
                        <input type="text" name="roomId" placeholder="C\xf3digo de sala">
                        <button class="button" type="submit">Ingresar</button>
                    </form>
                </div>
            `;let t=this.shadow.querySelector(".sala-form");t.addEventListener("submit",e=>{e.preventDefault();let o=t.roomId.value;window.goTo(`/rooms/${o}/join`)});let o=document.createElement("style");o.textContent=`
                @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');

                .ingresar-sala-container {
                    background-image: url(${e(i)});
                    background-size: cover;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    font-family: 'Odibee Sans', cursive;
                }

                h2 {
                    font-size: 36px;
                    margin-bottom: 30px;
                    color: #333;
                }

                .sala-form {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    max-width: 400px;
                }

                input[type="text"] {
                    padding: 15px;
                    margin-bottom: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
                }

                .button {
                    width: 322px;
                    height: 87px;
                    border: none;
                    background-color: #2979FF;
                    color: white;
                    font-size: 24px;
                    margin-top: 20px;
                    border-radius: 6px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-weight: bold;
                    border: 15px solid #1976D2;
                    font-family: 'Odibee Sans', cursive;
                }

                .button:hover {
                    background-color: #0056b3;
                }

                @media (min-width: 768px) {
                    h2 {
                        font-size: 48px;
                    }

                    .sala-form {
                        width: 60%;
                    }

                    input[type="text"] {
                        font-size: 20px;
                    }

                    .button {
                        width: 400px;
                        height: 100px;
                        font-size: 32px;
                    }
                }
            `,this.shadow.appendChild(o)}}}customElements.define("ingresar-a-sala",x);const b=[{pathRegex:/^\/$/,render:()=>new g},{pathRegex:/^\/instructions$/,render:()=>new c},{pathRegex:/^\/play$/,render:()=>new m},{pathRegex:/^\/result$/,render:()=>new u},{pathRegex:/^\/tu-nombre$/,render:()=>new h},{pathRegex:/^\/ingresar-a-sala$/,render:()=>new x},{pathRegex:/^\/short-id\/(\d+)$/,render:e=>{let t=e&&e[1];if(!t)return console.error("roomId no encontrado en la URL."),new g;let o=new p;return o.setRoomId(t),o}},{pathRegex:/^\/rooms\/(\d+)\/join$/,render:async e=>{let t=e[1],o=new h;return await o.setRoomId(t),o}}];function f(e,t){window.history.pushState({},"",e),w(e,t)}async function w(e,t){let o=b.find(t=>t.pathRegex.test(e));if(o){let t=document.getElementById("app");if(t){t.innerHTML="";let r=o.render(o.pathRegex.exec(e));r instanceof Promise?t.appendChild(await r):t.appendChild(r)}}else console.warn(`El path '${e}' no fue encontrado.`),f("/")}window.goTo=f,w(function(){let e=window.location.pathname,t="/PPT-FRONTEND";return e.startsWith(t)?e.replace(t,"")||"/":e}());
//# sourceMappingURL=index.786b0436.js.map
