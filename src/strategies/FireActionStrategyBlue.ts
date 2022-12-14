import ActionStrategyFireBase from "./ActionStrategyFireBase";
import { constants } from "../helpers/Constants";

export default class FireActionStrategyBlue extends ActionStrategyFireBase {
    hpDamage: number;
    repeatCount: number;

    constructor() {
        super();
        this.hpDamage = constants.blueBulletDamage;
        this.repeatCount = constants.blueFireRepeat;
    }
}
