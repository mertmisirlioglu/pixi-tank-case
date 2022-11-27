import GameObject from "./GameObject";
import { Point, Sprite, Texture } from "pixi.js";
import { constants } from "./Constants";
import Game from "./Game";

export default class Grid extends GameObject {
    private _holdingObject!: GameObject;

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
        this.setToGridPosition(value);
        this._holdingObject = value;
    }

    setToGridPosition(value: GameObject) {
        value.setTransform(this.x + constants.spritePadding, this.y + constants.spritePadding);
        value.sprite.anchor.x = 0.5;
        value.sprite.anchor.y = 0.5;
        value.arrX = this.arrX;
        value.arrY = this.arrY;
    }

    changeHoldingObject(oldGrid: Grid) {
        this.holdingObject = oldGrid._holdingObject;
        oldGrid.resetHoldingObject();
    }

    resetHoldingObject() {
        this._holdingObject = null as unknown as GameObject;
    }

    getNextGrid(direction: Point) {
        if (
            this.arrX + direction.x >= 0 &&
            this.arrX + direction.y < constants.width - 1 &&
            this.arrY + direction.y >= 0 &&
            this.arrY + direction.y < constants.height - 1
        )
            return Game.Instance.world.gridArr[this.arrX + direction.x][this.arrY + direction.y];
        else return null;
    }
}
