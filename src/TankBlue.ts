import Tank from "./Tank";
import { Sprite, Texture } from "pixi.js";
import FireActionStrategyGreen from "./FireActionStrategyGreen";
import MoveActionStrategyStandard from "./MoveActionStrategyStandard";
import FireActionStrategyBlue from "./FireActionStrategyBlue";

export default class TankBlue extends Tank {
    constructor() {
        super();
        const sprite = new Sprite(Texture.from("tank_blue.png"));
        sprite.scale.x = -1;
        this.setSprite(sprite);

        const bulletSprite = new Sprite(Texture.from("tank_blue_bullet.png"));
        this.bulletSprite = bulletSprite;

        this.setDefaultStrategies();
    }

    setDefaultStrategies() {
        this.fireAction.strategy = new FireActionStrategyBlue();
        this.moveAction.strategy = new MoveActionStrategyStandard();
    }
}
