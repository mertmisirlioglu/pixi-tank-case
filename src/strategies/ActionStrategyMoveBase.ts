import IActionStrategy from "../interfaces/IActionStrategy";
import Game from "../Game";
import { Point } from "pixi.js";
import Grid from "../objects/Grid";
import { constants } from "../helpers/Constants";

export default class ActionStrategyMoveBase implements IActionStrategy {
    xStep: number;
    yStep: number;

    lastXCameraChanged = 0;
    lastYCameraChanged = 0;

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

        if (oldGrid) {
            this.fixCamera(oldGrid);
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

    fixCamera(grid: Grid) {
        const stage = Game.Instance.app.stage;

        const gridW = grid.width;
        const gridH = grid.height;

        const mapWidth = gridW * constants.width;
        const mapHeight = gridH * constants.height;

        const screenCenter: Point = new Point(
            Game.Instance.app.screen.width * 0.5,
            Game.Instance.app.screen.height * 0.5,
        );
        const newMapPos: Point = new Point(-grid.x + screenCenter.x, -grid.y + screenCenter.y);

        if (newMapPos.x < -Game.Instance.app.screen.width) {
            newMapPos.x = -mapWidth + Game.Instance.app.screen.width;
        }
        if (newMapPos.x > 0) {
            newMapPos.x = 0;
        }
        if (newMapPos.y < -mapHeight + Game.Instance.app.screen.height) {
            newMapPos.y = -mapHeight + Game.Instance.app.screen.height;
        }
        if (newMapPos.y > 0) {
            newMapPos.y = 0;
        }

        stage.x = newMapPos.x;
        stage.y = newMapPos.y;
    }
}
