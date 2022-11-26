import GameObject from "./GameObject";
import { Sprite, Texture } from "pixi.js";
import { constants } from "./Constants";

export default class Grid extends GameObject {
    private _holdingObject: GameObject | undefined;

    constructor(arrX: number, arrY: number) {
        super();
        this.arrX = arrX;
        this.arrY = arrY;
        this.x = arrX * 35;
        this.y = arrY * 35;
        const sprite = new Sprite(Texture.from("grid.png"));
        this.setSprite(sprite);
    }

    get holdingObject(): GameObject {
        return <GameObject>this._holdingObject;
    }

    set holdingObject(value: GameObject) {
        value.setTransform(this.x + constants.spritePadding, this.y + constants.spritePadding);
        value.sprite.anchor.x = 0.5;
        value.sprite.anchor.y = 0.5;
        value.arrX = this.arrX;
        value.arrY = this.arrY;
        this._holdingObject = value;
    }

    resetHoldingObject() {
        this._holdingObject = undefined;
    }
}
