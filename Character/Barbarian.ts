import { Character } from "./Character.ts";


export class Barbarian extends Character {
    /**
     * Constructeur de notre classe Barbare
     * @param name Nom du monstre
     * @param physicalAttack Attaque physique du barbare
     * @param physicalArmor Défense physique du barbare
     * @param speed Vitesse du barbare
     * @param maxHealth Point de vie du barbare
     */
    constructor() {
        super("Barbarian", '👨‍🎤',  75, 20, 5);
    }

    /**
     * Attaque un ennemi au hasard si il a plus de 20 % et donc perd 20 % de sa vie
     * @param targets Liste des ennemies
     */
    specialAttack(targets: Character[]): void {
        if (this.currentHealth > this.maxHealth * 20 / 100) {
            const target = targets[Math.round(Math.random() * targets.length)];
            const damage = Math.max(
                Math.round((this.physicalAttack - target.physicalArmor) * 1.3),
                1,
            );
            target.currentHealth = Math.max(target.currentHealth - damage, 0);
            this.currentHealth -= Math.round(this.maxHealth * 20 / 100);
        }
    }
}