import ManaUser from "../Characters/iManaUser.ts";
import { Item } from "./Item.ts";

export class Ether extends Item {

    readonly emoji: string = '💊';

    constructor() {
        super(30);
    }

    public use(target: ManaUser): void {
        target.gainMana(this.gainPercent);
        this.alreadyUsed = true

    }

}