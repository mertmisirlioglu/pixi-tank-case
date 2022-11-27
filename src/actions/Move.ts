import IAction from "../interfaces/IAction";
import IActionStrategy from "../interfaces/IActionStrategy";

export default class Move implements IAction {
    actionName = "Move";
    strategy: IActionStrategy | undefined;
}
