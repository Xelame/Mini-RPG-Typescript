import { Character } from "../Character/Character.ts";
import { Item } from "./Item.ts";

export class Potion extends Item {

    /**
     * ! Émoji représentant l'objet
     */
    readonly emoji = '🧉';

    /**
     * Constructeur de notre classe Potion qui donne un gain de vie de 50%
     */
    constructor() {
        super(50);
    }

    public use(target: Character): void {
        if (!target.isDead) {
            target.currentHealth = Math.min(target.currentHealth + target.maxHealth * this.gainPercent / 100, target.maxHealth);
        }
        this.alreadyUsed = true
    }
}