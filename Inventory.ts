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


    private _items: Array<Item> = [new Potion, new Potion, new Ether, new PartStar];

    private constructor() {}
    public addItems(item : Item) {
        this._items.push(item)
    }
    public get items() {
        return this._items.map(item => item.emoji);
    }
}

console.log(Inventory.instance.items);