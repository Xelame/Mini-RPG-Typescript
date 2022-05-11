import { Character } from "./Characters/Character.ts";
import { barbarian } from "./Characters/Barbarian.ts";
import { rogue } from "./Characters/Rogue.ts";
import { mage } from "./Characters/Mage.ts";
import { priest } from "./Characters/Priest.ts";
import { paladin } from "./Characters/Paladin.ts";
import { warrior } from "./Characters/Warrior.ts";
import { GameManager } from "./main.ts";
import { Fight } from "./Fight.ts"

export abstract class Menu {

    question: string;
    possibilities: string[];

    constructor(question : string, possibilities : string[]) {
        this.question = question;
        this.possibilities = possibilities;
    }


    asking() : void {
        console.log(this.question);
        for(let i = 1 ; i <= this.possibilities.length ; i++){
            console.log(`${i} - ${this.possibilities[i-1]}`);
        }
        this.resolve(prompt("Votre choix : "));
    }
    
    resolve(choice : string | null) : void {
        return
    }

    regles(){
        console.log("Le joueur pourra choisir un groupe de trois aventuriers parmi 6 classes possibles : Guerrier , Mage , Paladin , Barbare , Prêtre , Voleur. \nChacun de ces personnages aura des caractéristiques et des actions disponibles différentes. Une fois le groupe choisi, l'équipe pourra partir en exploration.\nLe but du jeu est de parcourir 5 salles dans un donjon et qu'au moins un des aventuriers soit encore vivant à la fin de l'exploration.\n")
    }
}

export class AdventureSelect extends Menu {
    constructor() {
        super("Choissisez un héro !", [
            "Guerrier",
            "Mage",
            "Paladin",
            "Barbare",
            "Prêtre",
            "Voleur",
        ])
        while (GameManager.instance.adventurerGroup.length < 3) {
            super.asking;
        }
    }

    resolve(choice : string | null) : void {
        switch(choice) {
            case "1" : 
                Fight.allyTeam.push(warrior);
                break;
            case "2" : 
                GameManager.instance.adventurerGroup.push(mage);
                break;
            case "3" : 
                GameManager.instance.adventurerGroup.push(paladin);
                break;
            case "4" : 
                GameManager.instance.adventurerGroup.push(barbarian);
                break;
            case "5" : 
                GameManager.instance.adventurerGroup.push(priest);
                break;
            case "6" : 
                GameManager.instance.adventurerGroup.push(rogue);
                break;
        }
    }

}

export class FightLoop extends Menu{
    fight : Fight ;
    constructor(fight : Fight){
        super("Choissisez une action",[
            "Basic attack",
            "Special attack",
            "Use item",])
            this.fight = fight
            while (this.fight.isFinished() != true){
                this.asking();
            }
    }
    resolve(choice : string | null):void{
        switch (choice){
            case "1":
                break;
            case"2":
                break;
            case"3":
                break;
    }
}
}
new AdventureSelect
