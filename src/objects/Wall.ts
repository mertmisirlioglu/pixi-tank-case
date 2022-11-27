import GameObject from "../core/GameObject";
import { IObstacle } from "../interfaces/IObstacle";
import { Sprite, Texture } from "pixi.js";

export default class Wall extends GameObject implements IObstacle {
    obstacleName: string;

    constructor() {
        super();
        this.obstacleName = "Wall";
        const sprite = new Sprite(Texture.from("wall.png"));
        this.setSprite(sprite);
    }
}
