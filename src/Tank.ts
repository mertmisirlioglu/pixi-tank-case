import GameObject from "./GameObject";
import IAction from "./IAction";
import Fire from "./Fire";
import Move from "./Move";

export default class Tank extends GameObject {
    moveAction: IAction;
    fireAction: IAction;
    actions: IAction[];

    constructor() {
        super();
        this.actions = [];
        this.moveAction = new Move();
        this.fireAction = new Fire();
    }

    getActionFromName(actionName: string) {
        this.actions.forEach((action) => {
            if (action.actionName == actionName) return action;
        });
        return undefined;
    }
}
