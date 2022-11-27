import { Point } from "pixi.js";

export default interface IActionStrategy {
    execute(direction?: Point): void;
}
