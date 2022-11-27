import ActionStrategyFireBase from "./ActionStrategyFireBase";
import { constants } from "../helpers/Constants";

export default class FireActionStrategyGreen extends ActionStrategyFireBase {
    hpDamage: number;
    repeatCount: number;

    constructor() {
        super();
        this.hpDamage = constants.greenBulletDamage;
        this.repeatCount = constants.greenFireRepeat;
    }
}
