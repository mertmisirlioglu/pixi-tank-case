import GameObject from "../core/GameObject";
import IDestroyable from "../interfaces/IDestroyable";
import { IObstacle } from "../interfaces/IObstacle";
import { Sprite, Texture } from "pixi.js";
import Game from "../Game";

export default class Hay extends GameObject implements IDestroyable, IObstacle {
    hp: number;
    obstacleName: string;

    constructor() {
        super();
        this.hp = 100;
        this.obstacleName = "Hay";
        const sprite = new Sprite(Texture.from("hay.png"));
        this.setSprite(sprite);
    }

    getHit(hp: number): void {
        this.hp -= hp;
        console.debug("---- Hay Hit ---- \nHay get " + hp + " hit damage\nCurrent HP: --- " + this.hp + "---");

        if (this.hp <= 0) {
            this.getGrid().resetHoldingObject();
            console.debug("------ Hay Destroyed ---------");
            Game.Instance.app.stage.removeChild(this);
        }
    }
}
