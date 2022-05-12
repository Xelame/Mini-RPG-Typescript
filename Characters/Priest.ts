import { Character } from "./Character.ts";
import ManaUser from "./iManaUser.ts";


export class Priest extends Character implements ManaUser {

    /**
     * Mana actuelle du Pretre
     */
    currentMana = 10;

    /**
     * Mana max du Pretre
     */
    maxMana = 10;

    /**
     * Constructeur de notre classe Pretre
     * Avec des valeurs par défaut :
     */
    constructor() {
        super("Priest",'🧕', 35, 30, 4);
    }

    /**
     * Soigne un allié
     * @param target Cible du soin du Pretre
     */
    specialAttack(target: Character): void {
        if (this.currentMana) {
            target.heal(25);
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
