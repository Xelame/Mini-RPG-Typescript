import { Character } from "./Character.ts";
import ManaUser from "./iManaUser.ts";


export class Priest extends Character implements ManaUser {

    currentMana = 10;
    maxMana = 10;

    /**
     * Constructeur de notre classe Pretre
     * @param name Nom du Pretre
     * @param physicalAttack Attaque physique du Pretre
     * @param physicalArmor Défense physique du Pretre
     * @param speed Vitesse du Pretre
     * @param maxHealth Point de vie du Pretre
     */
    constructor(
        name: string,
        
    ) {
        super(name,35,30,4,100);
    }

    /**
     * Soigne un allié
     * @param target Cible du soin du Pretre
     */
    healing(target: Character): void {
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
export let priest = new Priest("Priest")