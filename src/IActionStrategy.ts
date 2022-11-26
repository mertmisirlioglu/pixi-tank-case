import Tank from "./Tank";

export default interface IActionStrategy {
    receiver: Tank | undefined;
    execute(x: number, y: number): void;
}
