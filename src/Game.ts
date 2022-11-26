import GridWorld from "./GridWorld";
import TankGreen from "./TankGreen";
import Tank from "./Tank";

export default class Game {
    static Instance: Game;

    tank: Tank;
    world: GridWorld;
    constructor() {
        Game.Instance = this;
        this.world = new GridWorld();
        this.tank = new TankGreen();
        this.world.gridArr[0][0].holdingObject = this.tank;

        document.addEventListener("keydown", this.handleInput.bind(this));
    }

    handleInput(event: KeyboardEvent) {
        if (event.key === "ArrowRight") {
            this.tank.moveAction.strategy?.execute(1, 0);
        }
        if (event.key === "ArrowDown") {
            this.tank.moveAction.strategy?.execute(0, 1);
        }
        if (event.key === "ArrowLeft") {
            this.tank.moveAction.strategy?.execute(-1, 0);
        }
        if (event.key === "ArrowUp") {
            this.tank.moveAction.strategy?.execute(0, -1);
        }
    }
}
