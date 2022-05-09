export abstract class Item {
    /**
     * Gain donné par l'objet en pourcentage
     */
    gainPercent: number;

    /**
     * Constructeur de notre classe Item
     * @param gainPercent Gain donné par l'objet en pourcentage
     */
    constructor(gainPercent: number) {
        this.gainPercent = gainPercent;
    }
}