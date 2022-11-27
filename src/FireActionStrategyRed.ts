import ActionStrategyFireBase from "./ActionStrategyFireBase";
import { constants } from "./Constants";

export default class FireActionStrategyRed extends ActionStrategyFireBase {
    hpDamage: number;
    repeatCount: number;

    constructor() {
        super();
        this.hpDamage = constants.redBulletDamage;
        this.repeatCount = constants.redFireRepeat;
    }
}
