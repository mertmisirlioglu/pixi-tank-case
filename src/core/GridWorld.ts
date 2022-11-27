import Grid from "../objects/Grid";
import { constants } from "../helpers/Constants";
import Hay from "../objects/Hay";
import Wall from "../objects/Wall";
import GameObject from "./GameObject";
import TankGreen from "../objects/TankGreen";

export default class GridWorld {
    gridArr: Grid[][];

    constructor() {
        this.gridArr = [];
        for (let i = 0; i < constants.width; i++) {
            this.gridArr[i] = [];
            for (let j = 0; j < constants.height; j++) {
                this.gridArr[i][j] = new Grid(i, j);
            }
        }

        this.generateObstacle(Wall, constants.walls);
        this.generateObstacle(Hay, constants.hays);
    }

    generateObstacle(obstacle: typeof GameObject, count: number) {
        let maxIter: number;
        let rndGrid: Grid;
        for (let i = 0; i < count; i++) {
            maxIter = 0;
            rndGrid = this.pickRandomGrid();
            while (rndGrid.holdingObject != undefined && maxIter < 100) {
                rndGrid = this.pickRandomGrid();
                maxIter++;
            }
            rndGrid.holdingObject = new obstacle();
        }
    }

    pickRandomGrid() {
        const rnd1 = Math.floor(Math.random() * constants.width);
        const rnd2 = Math.floor(Math.random() * constants.height);
        return this.gridArr[rnd1][rnd2];
    }
}
