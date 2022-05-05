import {Contact} from "./hero.ts";

export class ContactManager {
    contactList : Contact[] = [];
    launch() {
        let choice = 0;
        while(choice != 3){
            choice = this.menu("Menu Principal",[
                "Jouer",
                "Règles",
                "Quitter"
            ]);
            switch(choice){
                case 1 : 
                    this.selectHeroes();
                    break;
                case 2 :
                    this.regles();
                    break;
                default :
                    console.log("Au revoir!");
                    return;
            }
        }
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
        if(this.contactList.length == 0){
            console.log("Aucun contact enregistré.");
            return;
        }
        console.log("Liste de contacts:");
        for(let i = 0; i < this.contactList.length; i++){
            console.log(`\t ${i + 1}. ${this.contactList[i].toString()}`);
        }
    }
    regles(){
        console.log("Le joueur pourra choisir un groupe de trois aventuriers parmi 6 classes possibles : Guerrier , Mage , Paladin , Barbare , Prêtre , Voleur. \nChacun de ces personnages aura des caractéristiques et des actions disponibles différentes. Une fois le groupe choisi, l'équipe pourra partir en exploration.\nLe but du jeu est de parcourir 5 salles dans un donjon et qu'au moins un des aventuriers soit encore vivant à la fin de l'exploration.\n")
    }
}