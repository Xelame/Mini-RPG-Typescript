import { Character } from "../Characters/Character.ts";
import ManaUsed from "../Characters/iManaUser.ts"
export abstract class Item {
    /**
     * Gain donné par l'objet en pourcentage
     */
    protected readonly gainPercent: number;

    /**
     * ? Status de l'objet pour savoir si il a déjà été utilisé
     */
    public alreadyUsed: boolean = false;

    /**
     * ! Émoji représentant l'objet
     */
    public readonly emoji: string = "";

    /**
     * Constructeur de notre classe Item
     * @param gainPercent Gain donné par l'objet en pourcentage
     */
    constructor(gainPercent: number) {
        this.gainPercent = gainPercent;
    }

    /**
     * Fonction voué a être écraser par les classes filles
     * @param character Cible de l'objet
     */
    use(character : Character | ManaUsed): void {
        return 
    }
}