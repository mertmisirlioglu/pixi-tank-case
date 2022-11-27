import Game from "./Game";
import Bullet from "./Bullet";
import BulletObjectPool from "./BulletObjectPool";
import { Point, Sprite, Texture, Ticker } from "pixi.js";
import ActionStrategyFireBase from "./ActionStrategyFireBase";
import Tank from "./Tank";

export default class CustomBulletTimer {
    private readonly dtMs = 1000 / 16; // Game logic delta time (16hz)
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

        const startPosX = this.tank.arrX + this.tank.direction.x;
        const startPosY = this.tank.arrY + this.tank.direction.y;
        const bulletPos = Game.Instance.world.gridArr[startPosX][startPosY];
        if (bulletPos.holdingObject) {
            return;
        }

        for (let i = 0; i < this.strategy.repeatCount; i++) {
            bullet = BulletObjectPool.Instance.getFromBulletPool();
            bullet.bulletSprite = this.tank.bulletSprite;

            bulletPos.holdingObject = bullet;
            bullet.hpDamage = this.strategy.hpDamage;
            this.bullets.push(bullet);
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

        const oldGrid = Game.Instance.world.gridArr[this.bullets[i].arrX][this.bullets[i].arrY];
        const nextGrid = oldGrid.getNextGrid(this.direction);

        if (nextGrid == null) {
            this.killBullet(i);
            return;
        }

        if (nextGrid.holdingObject) {
            this.killBullet(i);
            if (nextGrid.holdingObject.hasOwnProperty("hp")) {
                console.log("damage");
            }
            return;
        }

        nextGrid.changeHoldingObject(oldGrid);
    }

    killBullet(i: number) {
        this.bullets[i].getGrid().resetHoldingObject();
        BulletObjectPool.Instance.returnToBulletPool(this.bullets[i]);
        this.bullets[i] = null as unknown as Bullet;
        this.deadBulletCount++;
    }
}
