import IActionStrategy from "../interfaces/IActionStrategy";
import Game from "../Game";
import Bullet from "../objects/Bullet";
import BulletObjectPool from "../helpers/BulletObjectPool";
import Tank from "../objects/Tank";
import Grid from "../objects/Grid";
import FireController from "../controller/FireController";

export default class ActionStrategyFireBase implements IActionStrategy {
    hpDamage: number;
    repeatCount: number;
    bullets: Bullet[];

    tank!: Tank;
    gridArray!: Grid[][];

    constructor() {
        this.hpDamage = 0;
        this.repeatCount = 0;
        this.bullets = [];
    }
    execute(): void {
        this.tank = Game.Instance.tank;
        this.gridArray = Game.Instance.world.gridArr;
        new FireController(this);
    }

}
