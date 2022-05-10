import { Character } from "./Character.ts";


export class Warrior extends Character {
    /**
     * Constructeur de notre classe Barbare
     * @param name Nom du monstre
     * @param physicalAttack Attaque physique du barbare
     * @param physicalArmor Défense physique du barbare
     * @param speed Vitesse du barbare
     * @param maxHealth Point de vie du barbare
     */
    constructor() {
        super("Warrior", '', 60, 60, 6);
    }

    /**
     * Attaque un ennemi 
     * @param target Liste des ennemies
     */
     attack(target: Character): void {
        const damage = Math.max(this.physicalAttack - target.physicalArmor, 1);
        target.currentHealth = Math.max(this.currentHealth - damage, 0);
    }
}
