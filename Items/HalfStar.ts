import { Character } from "../Character/Character.ts";
import { Item } from "./Item.ts";


export class HalfStar extends Item {

    private readonly emoji: string = '🌟';

    constructor() {
        super(100);
    }

    public use(target: Character): void {
        if (target.isDead) {
            target.revive(this.gainPercent);
        } else {
            target.heal(this.gainPercent);
        }
    }
}