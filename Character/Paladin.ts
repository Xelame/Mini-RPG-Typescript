import { Character } from "./Character.ts";

class Paladin extends Character{
    constructor(name : string, physicalAttack : number, physicalArmor : number, speed : number, maxHealth : number) {
        super(name,physicalAttack,physicalArmor,speed,maxHealth)
    }
    specialAttack(targets : Character[]) : void {
        for (let i = 0; i < targets.length; i++) {
            this.currentHealth = Math.max((this.physicalAttack - targets[i].physicalArmor) * 0.4, 0)
            Math.round(this.currentHealth)
        }
    }
    
}