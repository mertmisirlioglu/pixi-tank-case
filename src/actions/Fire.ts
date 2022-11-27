import IAction from "../interfaces/IAction";
import IActionStrategy from "../interfaces/IActionStrategy";

export default class Fire implements IAction {
    actionName = "Fire";
    strategy: IActionStrategy | undefined;

    constructor() {
        this.strategy = undefined;
    }
}
