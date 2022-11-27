import Tank from "./Tank";
import { Sprite, Texture } from "pixi.js";
import MoveActionStrategyStandard from "./MoveActionStrategyStandard";
import FireActionStrategyRed from "./FireActionStrategyRed";

export default class TankRed extends Tank {
    constructor() {
        super();
        const sprite = new Sprite(Texture.from("tank_red.png"));
        sprite.scale.x = -1;
        this.setSprite(sprite);

        const bulletSprite = new Sprite(Texture.from("tank_red_bullet.png"));
        this.bulletSprite = bulletSprite;

        this.setDefaultStrategies();
    }

    setDefaultStrategies() {
        this.fireAction.strategy = new FireActionStrategyRed();
        this.moveAction.strategy = new MoveActionStrategyStandard();
    }
}
