import IActionStrategy from "./IActionStrategy";

export default interface IAction {
    actionName: string;
    strategy: IActionStrategy | undefined;
}
