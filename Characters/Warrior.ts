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
        super("Warrior", '🤺', 60, 60, 6);
    }
}
