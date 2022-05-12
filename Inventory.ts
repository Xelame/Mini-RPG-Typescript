import { Mage } from "./Characters/Mage.ts";
import { Ether } from "./Items/Ether.ts";
import { Item } from "./Items/Item.ts";
import { PartStar } from "./Items/PartStar.ts";
import { Potion } from "./Items/Potion.ts";
import {Menu} from "./Menu/Menu.ts"


export class Inventory {
    private static _instance: Inventory;
    public static get instance(): Inventory {
        if (!Inventory._instance) {
            Inventory._instance = new Inventory();
        }
        return Inventory._instance;
    }

    private constructor() {}
    public addItem(item : Item) {
        this._items.push(item)
    }
    private _items: Array<Item> = [new Potion, new Potion, new Ether, new PartStar];


    public get items() : Array<Item> {
        this._items = this._items.filter(item => !item.alreadyUsed)
        return this._items
    }
}
export class MenuInventory extends Menu{

}
