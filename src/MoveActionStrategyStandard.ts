import IActionStrategy from "./IActionStrategy";
import Tank from "./Tank";
import Grid from "./Grid";
import Game from "./Game";
import { constants } from "./Constants";
import Wall from "./Wall";
import { IObstacle } from "./IObstacle";
import IActionStrategyMove from "./ActionStrategyMoveBase";
import ActionStrategyMoveBase from "./ActionStrategyMoveBase";

export default class MoveActionStrategyStandard extends ActionStrategyMoveBase {
    constructor() {
        super();
        this.xStep = 1;
        this.yStep = 1;
    }
}
