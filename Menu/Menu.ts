import { Character } from "../Characters/Character.ts";
import { Fight } from "../Fight.ts"
import { Inventory } from "../Inventory.ts";
import { Item } from "../Items/Item.ts";

export abstract class Menu {

    /**
     * La question à poser
     */
    question: string;

    /**
     * La liste des différents choix possibles
     */
    possibilities: string[];


    /**
     * Constructeur de notre classe Menu
     * @param question La question à poser
     * @param possibilities Les différents choix possibles
     */
    constructor(question: string, possibilities: string[]) {
        this.question = question;
        this.possibilities = possibilities;
    }


    /**
     * Affiche la question à poser
     */
    asking(): void {
        console.log(this.question);
        for (let i = 1; i <= this.possibilities.length; i++) {
            console.log(`${i} - ${this.possibilities[i - 1]}`);
        }
        this.resolve(prompt("Votre choix : "));
    }

    /**
     * Résout le choix de l'utilisateur
     * @param choice Le choix de l'utilisateur
     * @returns Resultat donnée en fonction du choix de l'utilisateur
     */
    resolve(choice: string | null): void {
        return
    }
}

export class FightLoop extends Menu {
    fight: Fight;
    constructor(fight: Fight) {
        super("Choissisez une action", [
            "Basic attack",
            "Special attack",
            "Use item",])
        this.fight = fight
        while (this.fight.isFinished() != true) {
            this.asking();
        }
    }
    resolve(choice: string | null): void {
        switch (choice) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
        }
    }
}

export class Items extends Menu {
    constructor(items : Item[]) {
        super("Choisir une potion", items.map(i => i.emoji))
        super.asking()
    }
    resolve(choice : string | null) : void {
        switch(choice) {
            case "1" :
                break ;
            case "2" :
                break ;
            case "3" :
                break;
            case "4" :
                break; 
        }
    }
}   

console.log(new Items(Inventory.instance.items))