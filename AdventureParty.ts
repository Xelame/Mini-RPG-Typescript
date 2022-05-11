import { Barbarian } from "./Character/Barbarian.ts";
import { Rogue } from "./Character/Rogue.ts";
import { Mage } from "./Character/Mage.ts";
import { Priest } from "./Character/Priest.ts";
import { Paladin } from "./Character/Paladin.ts";
import { Warrior } from "./Character/Warrior.ts";
import { Character } from "./Character/Character.ts";
import { Menu } from "./menu.ts";

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
    }
}