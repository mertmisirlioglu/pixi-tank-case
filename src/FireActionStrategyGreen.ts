import Game from "./Game";
import ActionStrategyFireBase from "./ActionStrategyFireBase";

export default class FireActionStrategyGreen extends ActionStrategyFireBase {
    hpDamage: number;
    repeatCount: number;

    constructor() {
        super();
        this.hpDamage = 25;
        this.repeatCount = 1;
    }
}
