import { Barbarian } from "./Character/Barbarian.ts";
import { Rogue } from "./Character/Rogue.ts";
import { Mage } from "./Character/Mage.ts";
import { Priest } from "./Character/Priest.ts";
import { Paladin } from "./Character/Paladin.ts";
import { Warrior } from "./Character/Warrior.ts";
import { Character } from "./Character/Character.ts";
import { Menu } from "./menu.ts";
import { Fight } from "./Fight.ts";
export class FightLoop extends Menu{
    fight : Fight ;
    constructor(fight : Fight){
        super("Choissisez une action",[
            "Basic attack",
            "Special attack",
            "Use item",])
            this.fight = fight
            while (this.fight.isFinished() != true){
                super.asking();
            }
    }
    resolve(choice : string | null):void{
        let allCharacterOrderFight = this.fight.whichOrder()
        for(let i = 0 ; i < allCharacterOrderFight.length ; i++){
            if (allCharacterOrderFight[i] )
        console.log(allCharacterOrderFight[i].name)
        switch (choice){
            case "1":
            allCharacterOrderFight[i].attack(this.fight.enemyTeam[i]) // attack random enemies , need to choose 
                break;
            case"2":
           // allCharacterOrder[i].specialAttack()
                break;
            case"3":
                break;
    }
}
}
}