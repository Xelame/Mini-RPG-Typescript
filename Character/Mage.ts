import { Character } from "./Character.ts";
import Haki from "./iManaUser.ts";

export class Mage extends Character implements Haki {

    currentMana: number = 10;

    maxMana: number = 10;

    /**
     * Puissance magique du personnage
     */
    magicAttack: number;

    /**
     * Constructeur de notre classe Mage
     * @param name Nom du Mage
     * @param physicalAttack Attaque physique du mage
     * @param physicalArmor Défense physique du mage
     * @param speed Vitesse du mage
     * @param maxHealth Point de vie du mage
     * @param magicAttack Puissance magique du mage
     */

    constructor(
        name: string,
        physicalAttack: number,
        physicalArmor: number,
        speed: number,
        maxHealth: number,
        magicAttack: number,
    ) {
        super(name, physicalAttack, physicalArmor, speed, maxHealth);
        this.magicAttack = magicAttack;
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