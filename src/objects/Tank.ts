import GameObject from "../core/GameObject";
import IAction from "../interfaces/IAction";
import Fire from "../actions/Fire";
import Move from "../actions/Move";
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
