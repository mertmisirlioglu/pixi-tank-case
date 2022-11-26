import IActionStrategy from "./IActionStrategy";
import Tank from "./Tank";

export default class FireActionStrategyBlue implements IActionStrategy {
    receiver: Tank | undefined;

    execute(): void {
        return;
    }
}
