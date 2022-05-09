export abstract class Item {
    /**
     * Gain donné par l'objet en pourcentage
     */
    gainPercent: number;

    public readonly emoji: string = "";

    /**
     * Constructeur de notre classe Item
     * @param gainPercent Gain donné par l'objet en pourcentage
     */
    constructor(gainPercent: number) {
        this.gainPercent = gainPercent;
    }
}