import { Character } from "../Characters/Character.ts";
import { Menu } from "./Menu.ts"
import { CibleMenu } from "./Cible.ts"
import { ItemMenu } from "./ItemSelection.ts";


export class ActionMenu extends Menu {

    private character: Character;

    private enemies: Character[];

    private allies: Character[];

    constructor(
        character: Character,
        enemies: Character[],
        allies: Character[],
    ) {
        super("Choissisez une action", [
            "Basic attack",
            "Special attack",
            "Use item",])
        this.character = character;
        this.enemies = enemies;
        this.allies = allies;
        super.asking();
    }

    protected resolve(choice: string | null): void {
        switch (choice) {
            case "1":
                this.character.attack(this.enemies[new CibleMenu(this.enemies).cible]);
                break;
            case "2":
                if (!this.character.specialAttackOnAll(this.enemies)) {
                    if (!this.character.specialAttackOnNothing()) {
                        if (this.character.specialAttackOnEnnemy()) {
                            this.character.specialAttackOnEnnemy(this.enemies[new CibleMenu(this.enemies).cible]);
                        }
                        if (this.character.specialAttackOnAlly()) {
                            this.character.specialAttackOnAlly(this.allies[new CibleMenu(this.allies).cible]);
                        } 
                        if (!this.character.specialAttackOnAlly() && !this.character.specialAttackOnEnnemy()) {
                            console.log("Nothing append");
                            super.asking();
                        }
                    }
                }
                break;
            case "3":
                new ItemMenu(this.allies);
                break;
        }
    }
}