import { Container, IDestroyOptions, Sprite } from "pixi.js";
import Game from "./Game";

class Transformer {
    gameObject: GameObject;

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject;
    }

    get x() {
        return this.gameObject.position.x;
    }

    set x(value: number) {
        this.gameObject.position.x = value;
    }

    get y() {
        return this.gameObject.position.y;
    }

    set y(value: number) {
        this.gameObject.position.y = value;
    }

    get rotation() {
        return this.gameObject.rotation;
    }

    set rotation(value: number) {
        this.gameObject.rotation = value;
    }

    set(x: number, y: number) {
        this.gameObject.position.x = x;
        this.gameObject.position.y = y;
    }
}

class GameObject extends Container {
    //
    transformer = new Transformer(this);

    sprite: Sprite;
    private _arrX: number;
    private _arrY: number;

    constructor() {
        super();
        this.sprite = new Sprite();
        this._arrX = 0;
        this._arrY = 0;
    }

    getSprite(): Sprite {
        return this.sprite;
    }

    setSprite(sprite: Sprite) {
        this.removeChild(sprite);

        this.sprite = sprite;

        this.addChild(sprite);

        Game.Instance.app.stage.addChild(this);
    }

    get arrY(): number {
        return this._arrY;
    }

    set arrY(value: number) {
        this._arrY = value;
    }
    get arrX(): number {
        return this._arrX;
    }

    set arrX(value: number) {
        this._arrX = value;
    }

    getGrid() {
        return Game.Instance.world.gridArr[this._arrX][this.arrY];
    }

    destroy(options: IDestroyOptions) {
        super.destroy(options);
    }
}

export default GameObject;
