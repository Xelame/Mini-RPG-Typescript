import { Character } from "../Characters/Character.ts";
import { Inventory } from "../Inventory.ts";
import { CibleMenu } from "./Cible.ts";
import { Menu } from "./Menu.ts";

export class ItemMenu extends Menu {
    
    /**
     * Groupe de personnage choisie au début de la partie
     */
    private allyteam : Character[]

    constructor(allyteam : Character[]) {
        super("Choisir une potion", Inventory.instance.items.map(i => i.emoji))
        this.allyteam = allyteam
        super.asking();
    }

    protected resolve(choice : string | null) : void {
        if (choice != null) {
            if (Inventory.instance.items[parseInt(choice) - 1]) {
                Inventory.instance.items[parseInt(choice) - 1].use(this.allyteam[new CibleMenu(this.allyteam).cible])
            }
        }
    }
}