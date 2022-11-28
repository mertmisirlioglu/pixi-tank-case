import { Application, Loader } from "pixi.js";
import "./style.css";
import Game from "./Game";
import { gameOptions } from "./gameConfig";

declare const VERSION: string;

console.log(`Welcome from pixi-typescript-boilerplate ${VERSION}`);

const app = new Application(gameOptions);

window.onload = async (): Promise<void> => {
    await loadGameAssets();

    document.body.appendChild(app.view);

    // resizeCanvas();

    new Game(app);
};

async function loadGameAssets(): Promise<void> {
    return new Promise((res, rej) => {
        const loader = Loader.shared;
        loader.add("sprites", "./assets/spritesheet.json");

        loader.onComplete.once(() => {
            res();
        });

        loader.onError.once(() => {
            rej();
        });

        loader.load();
    });
}

function resizeCanvas(): void {
    const resize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        // app.stage.scale.x = window.innerWidth / gameWidth;
        // app.stage.scale.y = window.innerHeight / gameHeight;
    };

    resize();

    window.addEventListener("resize", resize);
}
