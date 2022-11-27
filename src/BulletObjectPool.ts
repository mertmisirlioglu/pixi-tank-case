import Bullet from "./Bullet";
import { constants } from "./Constants";

export default class BulletObjectPool {
    static Instance: BulletObjectPool;
    bulletPool: Bullet[];

    constructor() {
        BulletObjectPool.Instance = this;
        this.bulletPool = [];
        let bullet: Bullet;
        for (let i = 0; i < constants.bulletPoolAmount; i++) {
            bullet = new Bullet();
            bullet.visible = false;
            this.bulletPool.push(bullet);
        }
    }

    getFromBulletPool(): Bullet {
        for (let i = 0; i < this.bulletPool.length; i++) {
            if (!this.bulletPool[i].visible) {
                this.bulletPool[i].visible = true;
                return this.bulletPool[i];
            }
        }
        const nBullet = new Bullet();
        this.bulletPool.push(nBullet);
        return nBullet;
    }

    returnToBulletPool(bullet: Bullet) {
        bullet.visible = false;
    }
}
