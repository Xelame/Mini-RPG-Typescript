import { Character } from "./Character.ts";

export class Paladin extends Character {

    /**
     * Constructeur de notre classe Paladin
     * Avec des valeurs par défaut :
     */
    constructor() {
        super("Paladin", '🤖', 50, 70, 3)
    }

    /**
     * Le paladin attaque tous les ennemies avec des dégats réduits
     * @param targets Groupes d'ennemis (généralement)
     */
    public specialAttackOnAll(targets: Character[]): boolean {
        for (let i = 0; i < targets.length; i++) {
            let damage = Math.max((this.physicalAttack - targets[i].physicalArmor) * 0.4, 10)
            targets[i].currentHealth = Math.max(targets[i].currentHealth - damage, 0)
            Math.round(this.currentHealth)
        }
        return true
    }

}
