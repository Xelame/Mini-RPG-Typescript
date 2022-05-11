import { Inventory } from "../Inventory.ts";
import {Character} from "./Character.ts"
import {HalfStar} from "../Items/HalfStar.ts"
import { Ether } from "../Items/Ether.ts";
import { PartStar } from "../Items/PartStar.ts";
import { Potion } from "../Items/Potion.ts";

class Thief extends Character {
    constructor(
        name : string, 
        physicalAttack : number, 
        physicalArmor : number, 
        speed : number, 
        maxHealth : number
        ){
        super(name,physicalAttack,physicalArmor,speed,maxHealth)
    }
    thiefItems() : void {
        const steal = Math.round(Math.random() * 100);
        if (steal < 5) {
            Inventory.instance.addItems(new HalfStar)
            console.log("jai volé une moitié d'étoile")
        } else if (steal < 15) {
            Inventory.instance.addItems(new Ether)
            console.log("jai volé un ether")
        } else if (steal < 30) {
            Inventory.instance.addItems(new PartStar)
            console.log("jai volé une partie d'étoile")
        } else if (steal < 60) {
            Inventory.instance.addItems(new Potion)
            console.log("jai volé une potion")
        } else {
            console.log("Rien n'est volé")
        }
    }
}   
console.log(Inventory.instance.items)
new Thief("didier", 10, 10, 10, 10).thiefItems()
console.log(Inventory.instance.items)