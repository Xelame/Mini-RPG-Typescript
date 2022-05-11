import { Character } from "../Characters/Character.ts";
import { Item } from "./Item.ts";


export class HalfStar extends Item {

    public readonly emoji: string = '🌟';

    constructor() {
        super(100);
    }

    public use(target: Character): void {
        if (target.isDead) {
            target.revive(this.gainPercent);
        } else {
            target.heal(this.gainPercent);
        
        }
        this.alreadyUsed = true

    }
}