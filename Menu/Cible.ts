import { Character } from "../Characters/Character.ts";
import { Menu } from "./Menu.ts";

export class CibleMenu extends Menu {

    cible: number = -1;

    constructor(team: Character[]) {
        console.log(team)
        super("Choissisez quel personnage cibler :", team.map((c) => c.name))
        super.asking();
    }


    resolve(choice: string | null): void {
        switch (choice) {
            case "1":
                this.cible = 0;
                break
            case "2":
                this.cible = 1;
                break
            case "3":
                this.cible = 2;
                break
            default:
                console.log("Veuillez choisir une option valide !");
                super.asking()
                break;
        }
    }
}
