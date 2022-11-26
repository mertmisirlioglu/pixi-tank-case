import GameObject from "./GameObject";
import IDestroyable from "./IDestroyable";
import { IObstacle } from "./IObstacle";
import { Sprite, Texture } from "pixi.js";

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
}
