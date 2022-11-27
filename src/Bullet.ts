import GameObject from "./GameObject";
import { Sprite } from "pixi.js";

export default class Bullet extends GameObject {
    private _bulletSprite!: Sprite;
    hpDamage: number;

    constructor() {
        super();
        this.hpDamage = 0;
    }

    get bulletSprite(): Sprite {
        return this._bulletSprite;
    }

    set bulletSprite(value: Sprite) {
        const sprite = new Sprite(value.texture);
        this.setSprite(sprite);
        this._bulletSprite = sprite;
    }
}
