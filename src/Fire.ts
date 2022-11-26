import IAction from "./IAction";
import IActionStrategy from "./IActionStrategy";

export default class Fire implements IAction {
    actionName = "Fire";
    strategy: IActionStrategy | undefined;

    constructor() {
        this.strategy = undefined;
    }
}
