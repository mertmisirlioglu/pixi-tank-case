import IActionStrategy from "./IActionStrategy";
import Tank from "./Tank";
import Grid from "./Grid";
import Game from "./Game";
import { constants } from "./Constants";
import Wall from "./Wall";
import { IObstacle } from "./IObstacle";

export default class MoveActionStrategyStandard implements IActionStrategy {
    receiver: Tank;

    constructor(receiver: Tank) {
        this.receiver = receiver;
    }

    execute(x: number, y: number): void {
        const currentX = this.receiver.arrX;
        const currentY = this.receiver.arrY;

        const nextX = this.receiver.arrX + x;
        const nextY = this.receiver.arrY + y;

        if (
            nextX >= 0 &&
            nextX < constants.width &&
            nextY >= 0 &&
            nextY < constants.height &&
            !Game.Instance.world.gridArr[nextX][nextY].holdingObject
        ) {
            Game.Instance.world.gridArr[currentX][currentY].resetHoldingObject();
            Game.Instance.world.gridArr[nextX][nextY].holdingObject = this.receiver;
            this.fixRotation(x, y);
        }
    }

    fixRotation(x: number, y: number) {
        if (x != 0) this.receiver.sprite.scale.x = x > 0 ? -1 : 1;
        if (y != 0) {
            this.receiver.sprite.scale.x = -1;
            this.receiver.angle = y > 0 ? 90 : 270;
        }
    }
}
