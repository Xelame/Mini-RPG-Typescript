import { Character } from "../Characters/Character.ts";
import { Inventory } from "../Inventory.ts";
import { Item } from "../Items/Item.ts";
import { CibleMenu } from "./Cible.ts";

export abstract class Menu {

    /**
     * La question à poser
     */
    protected readonly question: string;

    /**
     * La liste des différents choix possibles
     */
    protected readonly possibilities: string[];

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
    protected asking(): void {
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
    protected resolve(choice: string | null): void {
        return
    }
}   
