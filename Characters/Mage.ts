import { Character } from "./Character.ts";
import Haki from "./iManaUser.ts";

export class Mage extends Character implements Haki {

    /**
     * Mana actuelle du Mage
     */
    currentMana: number = 10;

    /**
     * Mana max du Mage
     */
    maxMana: number = 10;

    /**
     * Puissance magique du Mage
     */
    magicAttack: number;

    /**
     * Constructeur de notre Personnage Mage
     * Avec des valeurs par défaut :
     */
    constructor() {
        super("Mage", '🧙', 30, 30, 4);
        this.magicAttack = 40;
    }

    /**
     * Fonction qui permet de lancer un sort
     * @param target Cible du sort
     */
    specialAttack(target: Character): void {
        if (this.currentMana) {
            target.currentHealth = Math.max(
                target.currentHealth - this.magicAttack,
                0,
            );
            this.currentMana--;
        }
    }

    /**
     * Récupère un pourcentage de mana
     * @param percent Pourcentage de mana récupérer
     */
     gainMana(percent: number): void {
        this.currentMana = Math.min(this.currentMana + Math.round(this.maxMana*percent/100), this.maxMana);
    }
}