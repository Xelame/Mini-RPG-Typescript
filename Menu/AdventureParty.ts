import { Barbarian } from "../Characters/Barbarian.ts";
import { Rogue } from "../Characters/Rogue.ts";
import { Mage } from "../Characters/Mage.ts";
import { Priest } from "../Characters/Priest.ts";
import { Paladin } from "../Characters/Paladin.ts";
import { Warrior } from "../Characters/Warrior.ts";
import { Character } from "../Characters/Character.ts";
import { Menu } from "./Menu.ts";

export class AdventureParty extends Menu {

    party: Character[] = [];

    constructor() {
        super("Choissisez un héro !", [
            "Guerrier",
            "Mage",
            "Paladin",
            "Barbare",
            "Prêtre",
            "Voleur",
        ])
        while (this.party.length < 3) {
            super.asking();
        }
    }

    resolve(choice : string | null) : void {
        console.clear()
        switch(choice) {
            case "1" : 
                this.party.push(new Warrior);
                break;
            case "2" : 
                this.party.push(new Mage);
                break;
            case "3" : 
                this.party.push(new Paladin);
                break;
            case "4" : 
                this.party.push(new Barbarian);
                break;
            case "5" : 
                this.party.push(new Priest);
                break;
            case "6" : 
                this.party.push(new Rogue);
                break;
            default:
                console.log("Veuillez choisir une option valide !");
                break;
        }
        console.log(this.party.map(character => character.emoji));
    }
}