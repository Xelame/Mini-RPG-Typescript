import { Character } from "./Character/Character.ts";
import { Barbare } from "./Character/Barbarian.ts";
import { Mage } from "./Character/Mage.ts";
import { Pretre } from "./Character/Priest.ts";
import { GameManager } from "./main.ts";

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
                "Guerrier",
                "Mage",
                "Paladin",
                "Barbare",
                "Prêtre",
                "Voleur",
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
                GameManager.instance.adventurerGroup.push(new Character("Guerrier",20,20,8,150));
                break;
            case "2" : 
                GameManager.instance.adventurerGroup.push(new Mage("Mage",20,20,8,150,100));
                break;
            case "3" : 
                //GameManager.instance.adventurerGroup.push(new Paladin("Paladin",20,20,8,150));
                break;
            case "4" : 
                GameManager.instance.adventurerGroup.push(new Barbare("Barbare",20,20,8,150));
                break;
            case "5" : 
                GameManager.instance.adventurerGroup.push(new Pretre("Pretre",20,20,8,150));
                break;
            case "6" : 
                //GameManager.instance.adventurerGroup.push(new Voleur("Voleur",20,20,8,150));
                break;
        }
    }

}

new AdventureSelect