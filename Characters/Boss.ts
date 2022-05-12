import { Character } from "./Character.ts";

class Boss extends Character {

    constructor(
        name : string, 
        emoji : string,
        physicalAttack : number, 
        physicalArmor : number, 
        speed : number, 
        ) {
        super(name, emoji,physicalAttack,physicalArmor,speed)
    }
    specialAttackOnAll(targets : Character[]) : boolean {
        const choiceAttack = Math.round(Math.random() * 100)
        if (choiceAttack < 30) {
            for (let i = 0; i < targets.length; i++) {
                this.currentHealth = Math.max((this.physicalAttack - targets[i].physicalArmor) * 0.4, 0)
                Math.round(this.currentHealth)
            }
        } else {
            this.attackAlly(targets)
        }
        return true
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