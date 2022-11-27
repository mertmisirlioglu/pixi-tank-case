import Tank from "./Tank";
import { Sprite, Texture } from "pixi.js";
import FireActionStrategyGreen from "../strategies/FireActionStrategyGreen";
import MoveActionStrategyStandard from "../strategies/MoveActionStrategyStandard";

export default class TankGreen extends Tank {
    constructor() {
        super();
        const sprite = new Sprite(Texture.from("tank_green.png"));
        sprite.scale.x = -1;
        this.setSprite(sprite);

        const bulletSprite = new Sprite(Texture.from("tank_green_bullet.png"));
        this.bulletSprite = bulletSprite;

        this.setDefaultStrategies();
    }

    setDefaultStrategies() {
        this.fireAction.strategy = new FireActionStrategyGreen();
        this.moveAction.strategy = new MoveActionStrategyStandard();
    }
}
