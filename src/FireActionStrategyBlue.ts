import Game from "./Game";
import ActionStrategyFireBase from "./ActionStrategyFireBase";

export default class FireActionStrategyBlue extends ActionStrategyFireBase {
    hpDamage: number;
    repeatCount: number;

    constructor() {
        super();
        this.hpDamage = 0;
        this.repeatCount = 0;
    }

    execute(): void {
        const gridArr = Game.Instance.world.gridArr;

        return;
    }
}
