import { Character } from "./Character.ts";

export class Paladin extends Character{
    constructor(name : string) {
        super(name,50,70,3,100)
    }
    specialAttack(targets : Character[]) : void {
        for (let i = 0; i < targets.length; i++) {
            this.currentHealth = Math.max((this.physicalAttack - targets[i].physicalArmor) * 0.4, 0)
            Math.round(this.currentHealth)
        }
    }
    
}
export let paladin = new Paladin("Paladin")