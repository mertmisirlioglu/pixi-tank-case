import GridWorld from "./GridWorld";
import TankGreen from "./TankGreen";
import Tank from "./Tank";
import TankBlue from "./TankBlue";
import TankRed from "./TankRed";
import { Application } from "pixi.js";
import { Direction } from "./Direction";
import BulletObjectPool from "./BulletObjectPool";

export default class Game {
    static Instance: Game;
    app: Application;
    tank: Tank;
    tanks: Tank[];
    currentTankIndex = 0;
    world: GridWorld;
    constructor(app: Application) {
        Game.Instance = this;
        this.app = app;
        this.world = new GridWorld();
        new BulletObjectPool();

        this.tank = new TankGreen();
        this.tanks = [];
        this.tanks.push(this.tank);

        const blueTank = new TankBlue();
        blueTank.visible = false;
        this.tanks.push(blueTank);

        const redTank = new TankRed();
        redTank.visible = false;
        this.tanks.push(redTank);

        this.world.gridArr[0][0].holdingObject = this.tank;

        document.addEventListener("keydown", this.handleInput.bind(this));
    }

    handleInput(event: KeyboardEvent) {
        if (event.key === "ArrowRight") {
            this.tank.moveAction.strategy?.execute(Direction.Right);
        }
        if (event.key === "ArrowDown") {
            this.tank.moveAction.strategy?.execute(Direction.Down);
        }
        if (event.key === "ArrowLeft") {
            this.tank.moveAction.strategy?.execute(Direction.Left);
        }
        if (event.key === "ArrowUp") {
            this.tank.moveAction.strategy?.execute(Direction.Up);
        }

        if (event.key === "t") {
            this.changeTank();
        }

        if (event.key === " ") {
            this.tank.fireAction.strategy?.execute();
        }
    }

    changeTank() {
        const oldTank = this.tank;
        const currentGrid = this.world.gridArr[oldTank.arrX][oldTank.arrY];
        if (++this.currentTankIndex > 2) this.currentTankIndex = 0;
        this.tank = this.tanks[this.currentTankIndex];
        console.log("old tank type", oldTank);
        console.log("this tank type", this.tank);
        this.tank.scale = oldTank.scale;
        this.tank.angle = oldTank.angle;

        currentGrid.holdingObject = this.tank;

        oldTank.visible = false;
        this.tank.visible = true;
    }
}