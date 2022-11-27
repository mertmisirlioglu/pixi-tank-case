import IActionStrategy from "../interfaces/IActionStrategy";
import Tank from "../objects/Tank";
import Grid from "../objects/Grid";
import Game from "../Game";
import { constants } from "../helpers/Constants";
import Wall from "../objects/Wall";
import { IObstacle } from "../interfaces/IObstacle";
import IActionStrategyMove from "./ActionStrategyMoveBase";
import ActionStrategyMoveBase from "./ActionStrategyMoveBase";

export default class MoveActionStrategyStandard extends ActionStrategyMoveBase {
    constructor() {
        super();
        this.xStep = 1;
        this.yStep = 1;
    }
}
