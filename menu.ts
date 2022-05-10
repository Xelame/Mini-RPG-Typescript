import { Character } from "./Character/Character.ts";
import { barbarian } from "./Character/Barbarian.ts";
import { rogue } from "./Character/Rogue.ts";
import { mage } from "./Character/Mage.ts";
import { priest } from "./Character/Priest.ts";
import { paladin } from "./Character/Paladin.ts";
import { warrior } from "./Character/Warrior.ts";
import { GameManager } from "./main.ts";
import { Fight } from "./Fight.ts"

export class Menu {

    question: string;
    possibilities: string[];

    constructor(question : string, possibilities : string[]) {
        this.question = question;
        this.possibilities = possibilities;
    }


    asking() : void {
        this.resolve(prompt(this.question))
    }
    
    resolve(choice : string | null) : void {
        return
    }

    menu(name : string, options :string[]) : number {
        console.log(name);
        for(let i = 0 ; i < options.length; i++){
            console.log(`\t ${i+1}. ${options[i]}`)
        }
        let choice : number = 0;
        while(isNaN(choice) || choice < 1 || choice > options.length){
            const choiceStr = prompt("Choisissez une option :");
            if(choiceStr !== null){
                choice = parseInt(choiceStr);
            }
        }
        return choice;
    }

    selectHeroes(){
        let countTeam = 0
        let menuTeam = 0;
        while(countTeam != 3){
            menuTeam = this.menu("Choissisez un héro !",[
                "Warrior",
                "Mage",
                "Paladin",
                "Barbarian",
                "Priest",
                "Rogue",
            ]);
        }

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