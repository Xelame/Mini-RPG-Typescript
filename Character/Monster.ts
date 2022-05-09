import { Character } from "./Character.ts";


export class Monstre extends Character {
    /**
     * Constructeur de notre classe Monstre
     * @param name Nom du monstre
     * @param physicalAttack Attaque physique du monstre
     * @param physicalArmor Défense physique du monstre
     * @param speed Vitesse du monstre
     * @param maxHealth Point de vie du monstre
     */
    constructor(
        name: string,
        physicalAttack: number,
        physicalArmor: number,
        speed: number,
        maxHealth: number,
    ) {
        super(name, physicalAttack, physicalArmor, speed, maxHealth);
    }

    /**
     * Attaque un allié au hasard ou celui avec le moins de point de vie
     * @param targets Liste des alliés
     */
    attackAlly(targets: Character[]): void {
        const choice = Math.round(Math.random() * 100);
        if (choice <= 20) {
            const target = targets.sort((a, b) =>
                a.currentHealth - b.currentHealth
            )[0];
            this.attack(target);
        } else {
            this.attack(targets[Math.round(Math.random() * targets.length)]);
        }
    }
}