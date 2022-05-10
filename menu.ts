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