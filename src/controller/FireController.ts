import Game from "../Game";
import Bullet from "../objects/Bullet";
import BulletObjectPool from "../helpers/BulletObjectPool";
import { Point, Sprite, Texture, Ticker } from "pixi.js";
import ActionStrategyFireBase from "../strategies/ActionStrategyFireBase";
import Tank from "../objects/Tank";
import Grid from "../objects/Grid";
import Hay from "../objects/Hay";

export default class FireController {
    private readonly dtMs = 50; // Game logic delta time (16hz)
    private step = 0;
    private dtAccumulatorMs = 0;
    strategy: ActionStrategyFireBase;
    bullets: Bullet[];
    tank: Tank;
    direction: Point;
    deadBulletCount = 0;

    constructor(strategy: ActionStrategyFireBase) {
        this.bullets = [];
        this.strategy = strategy;
        this.tank = Game.Instance.tank;
        this.direction = this.tank.direction;

        this.createBullets().then(() => {
            Game.Instance.app.ticker.add(this.tickGame, this);
        });
    }

    async createBullets() {
        this.bullets = [];
        let bullet: Bullet;

        const bulletPos = this.tank.getGrid().getNextGrid(this.direction);
        if (bulletPos == null) return;

        for (let i = 0; i < this.strategy.repeatCount; i++) {
            bullet = BulletObjectPool.Instance.getFromBulletPool();
            bullet.bulletSprite = this.tank.bulletSprite;
            bulletPos.setToGridPosition(bullet);

            bullet.hpDamage = this.strategy.hpDamage;
            this.bullets.push(bullet);
        }

        for (let i = 0; i < this.strategy.repeatCount; i++) {
            this.canBulletMove(bulletPos, i, true);
        }

        console.log("this bullets length", this.bullets.length);
    }

    tickGame(deltaTime: number) {
        const { elapsedMS } = Game.Instance.app.ticker;
        this.dtAccumulatorMs += elapsedMS;

        while (this.dtAccumulatorMs >= this.dtMs) {
            this.dtAccumulatorMs -= this.dtMs;
            this.moveBullets();
            this.step++;
            console.log("heyyo");
        }
        if (this.deadBulletCount >= this.bullets.length) {
            console.log("öldü herkes");
            Game.Instance.app.ticker.remove(this.tickGame, this);
        }
    }

    moveBullets() {
        for (let i = 0; i < this.bullets.length; i++) {
            this.moveBullet(i);
        }
    }

    moveBullet(i: number) {
        if (this.bullets[i] == null) return;
        if (this.step < i) return;

        const oldGrid = Game.Instance.world.gridArr[this.bullets[i].arrX][this.bullets[i].arrY];

        const nextGrid = oldGrid.getNextGrid(this.direction);

        if (!this.canBulletMove(nextGrid, i)) return;
    }

    canBulletMove(grid: Grid | null, i: number, isCheck?: boolean) {
        if (grid == null || grid.holdingObject) {
            if (grid?.holdingObject instanceof Hay) {
                grid?.holdingObject.getHit(this.bullets[i].hpDamage);
            }
            this.killBullet(i);

            return false;
        }

        if (isCheck) return;

        const bulletGrid = Game.Instance.world.gridArr[this.bullets[i].arrX][this.bullets[i].arrY];
        if (bulletGrid.holdingObject == this.bullets[i]) {
            grid.changeHoldingObject(bulletGrid);
        } else if (grid.holdingObject == null) {
            grid.holdingObject = this.bullets[i];
        }
        return true;
    }

    killBullet(i: number) {
        BulletObjectPool.Instance.returnToBulletPool(this.bullets[i]);
        if (this.bullets[i].getGrid().holdingObject == this.bullets[i]) this.bullets[i].getGrid().resetHoldingObject();
        this.bullets[i] = null as unknown as Bullet;
        this.deadBulletCount++;
    }
}
