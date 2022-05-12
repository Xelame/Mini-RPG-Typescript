import { Inventory } from "../Inventory.ts";
import { Character } from "./Character.ts"
import { HalfStar } from "../Items/HalfStar.ts"
import { Ether } from "../Items/Ether.ts";
import { PartStar } from "../Items/PartStar.ts";
import { Potion } from "../Items/Potion.ts";

export class Rogue extends Character {

    /**
     * Constructeur de notre classe Rogue
     * Avec des valeurs par défaut :
     */
    constructor() {
        super("Rogue", '🦸', 40, 40, 8)
    }

    /**
     * Le Voleur vole un item (une chance de rien)
     */
    specialAttack() : void {
        const steal = Math.round(Math.random() * 100);
        if (steal < 5) {
            Inventory.instance.addItem(new HalfStar)
            console.log("jai volé une moitié d'étoile")
        } else if (steal < 15) {
            Inventory.instance.addItem(new Ether)
            console.log("jai volé un ether")
        } else if (steal < 30) {
            Inventory.instance.addItem(new PartStar)
            console.log("jai volé une partie d'étoile")
        } else if (steal < 60) {
            Inventory.instance.addItem(new Potion)
            console.log("jai volé une potion")
        } else {
            console.log("Rien n'est volé")
        }
    }
}