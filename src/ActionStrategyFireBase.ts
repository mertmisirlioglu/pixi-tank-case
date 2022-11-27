import IActionStrategy from "./IActionStrategy";
import Game from "./Game";
import Bullet from "./Bullet";
import BulletObjectPool from "./BulletObjectPool";
import Tank from "./Tank";
import Grid from "./Grid";
import CustomBulletTimer from "./CustomBulletTimer";

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
        new CustomBulletTimer(this);
    }

}
