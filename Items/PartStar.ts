import { Character } from "../Character/Character.ts";
import { Item } from "./Item.ts";

export class PartStar extends Item {

    readonly emoji: string = '✨';

    constructor() {
        super(20);
    }

    public use(target: Character): void {
        if (target.isDead) {
            target.revive(this.gainPercent);
        } else {
            target.heal(this.gainPercent + 30);
        }
    }
}