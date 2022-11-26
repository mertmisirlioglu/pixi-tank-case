import IActionStrategy from "./IActionStrategy";
import Tank from "./Tank";

export default class FireActionStrategyGreen implements IActionStrategy {
    receiver: Tank | undefined;

    execute(): void {
        return;
    }
}
