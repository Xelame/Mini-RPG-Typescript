import {Contact} from "./hero.ts";

export class Menu {
    team : string[] = []
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
            switch(menuTeam){
                case 1 : 
                    this.team.push("Guerrier")
                    console.log(this.team);
                    countTeam++;
                    break;
                case 2 : 
                    this.team.push("Mage");
                    console.log(this.team);
                    countTeam++;
                    break;
                case 3 : 
                    this.team.push("Paladin");
                    console.log(this.team);
                    countTeam++;
                    break;
                case 4 : 
                    this.team.push("Barbare");
                    console.log(this.team);
                    countTeam++;
                    break;
                case 5 : 
                    this.team.push("Prêtre");
                    console.log(this.team);
                    countTeam++;
                    break;
                case 6 : 
                    this.team.push("Voleur");
                    console.log(this.team);
                    countTeam++;
                    break;
            }
        }
    }
    regles(){
        console.log("Le joueur pourra choisir un groupe de trois aventuriers parmi 6 classes possibles : Guerrier , Mage , Paladin , Barbare , Prêtre , Voleur. \nChacun de ces personnages aura des caractéristiques et des actions disponibles différentes. Une fois le groupe choisi, l'équipe pourra partir en exploration.\nLe but du jeu est de parcourir 5 salles dans un donjon et qu'au moins un des aventuriers soit encore vivant à la fin de l'exploration.\n")
    }
}