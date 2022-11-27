import IActionStrategy from "../interfaces/IActionStrategy";
import { constants } from "../helpers/Constants";
import Game from "../Game";
import { Point } from "pixi.js";

export default class ActionStrategyMoveBase implements IActionStrategy {
    xStep: number;
    yStep: number;

    constructor() {
        this.xStep = 0;
        this.yStep = 0;
    }
    execute(direction: Point): void {
        const tank = Game.Instance.tank;

        direction.x *= this.xStep;
        direction.y *= this.yStep;

        const oldGrid = tank.getGrid();
        const nextGrid = oldGrid.getNextGrid(direction);

        if (nextGrid && !nextGrid.holdingObject) {
            nextGrid.changeHoldingObject(oldGrid);
            this.fixRotation(direction.x, direction.y);
            tank.direction = direction;
        }
    }

    fixRotation(x: number, y: number) {
        const tank = Game.Instance.tank;
        if (x != 0) tank.sprite.scale.x = x > 0 ? -1 : 1;
        if (y != 0) {
            tank.sprite.scale.x = -1;
            tank.angle = y > 0 ? 90 : 270;
        }
    }
}
