import GameObject from "./GameObject";
import IAction from "./IAction";
import Fire from "./Fire";
import Move from "./Move";
import { Point, Sprite } from "pixi.js";

export default class Tank extends GameObject {
    moveAction: IAction;
    fireAction: IAction;
    actions: IAction[];
    direction: Point;

    bulletSprite!: Sprite;

    constructor() {
        super();
        this.actions = [];
        this.moveAction = new Move();
        this.fireAction = new Fire();
        this.direction = new Point(1, 0);
    }
}
