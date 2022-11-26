import IActionStrategy from "./IActionStrategy";
import Tank from "./Tank";

export default class FireActionStrategyRed implements IActionStrategy {
    receiver: Tank | undefined;

    execute(): void {
        return;
    }
}
