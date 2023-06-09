import { Character } from "./Character.ts";

export class Monstre extends Character {
    /**
     * Constructeur de notre classe Monstre
     * @param name Nom du monstre
     * @param physicalAttack Attaque physique du monstre
     * @param physicalArmor Défense physique du monstre
     * @param speed Vitesse du monstre
     */
    constructor(
        name: string,
        emoji: string,
        physicalAttack: number,
        physicalArmor: number,
        speed: number,
    ) {
        super(name, emoji, physicalAttack, physicalArmor, speed);
    }

    /**
     * Attaque un allié au hasard ou celui avec le moins de point de vie
     * @param targets Liste des alliés
     */
    public attackAlly(targets: Character[]): void {
        const choice = Math.round(Math.random() * 100);
        if (choice <= 20) {
            const target = targets.sort((a, b) =>
                a.currentHealth - b.currentHealth
            )[0];
            console.log(target)
            this.attack(target);
        } else {
            let luck = Math.round(Math.random() * (targets.length-1))
            this.attack(targets[luck]);
        }
    }
}
