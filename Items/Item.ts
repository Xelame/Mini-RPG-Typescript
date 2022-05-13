import { Character } from "../Characters/Character.ts";
import ManaUsed from "../Characters/iManaUser.ts"
export abstract class Item {
    /**
     * Gain donné par l'objet en pourcentage
     */
    gainPercent: number;

    alreadyUsed: boolean = false;

    public readonly emoji: string = "";

    /**
     * Constructeur de notre classe Item
     * @param gainPercent Gain donné par l'objet en pourcentage
     */
    constructor(gainPercent: number) {
        this.gainPercent = gainPercent;
    }

    use(character : Character | ManaUsed): void {
        return 
    }
}