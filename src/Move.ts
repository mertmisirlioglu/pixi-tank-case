import IAction from "./IAction";
import IActionStrategy from "./IActionStrategy";

export default class Move implements IAction {
    actionName = "Move";
    strategy: IActionStrategy | undefined;
}
