import { Character } from "./Character/Character.ts";
import ManaUser from "./Character/iManaUser.ts";
import { Ether } from "./Items/Ether.ts";
import { Item } from "./Items/Item.ts";
import { PartStar } from "./Items/PartStar.ts";
import { Potion } from "./Items/Potion.ts";


export class Inventory {
    private static _instance: Inventory;
    public static get instance(): Inventory {
        if (!Inventory._instance) {
            Inventory._instance = new Inventory();
        }
        return Inventory._instance;
    }

    public items: Array<Item> = [new Potion, new Potion, new Ether, new PartStar];

    private constructor() {}
}

console.log(Inventory.instance.items);