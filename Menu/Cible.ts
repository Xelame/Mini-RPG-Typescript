import { Character } from "../Characters/Character.ts";
import { Menu } from "./Menu.ts";

export class CibleMenu extends Menu {

    cible: number = -1;
    team: Character[];

    constructor(team: Character[]) {
        super("Choissisez quel personnage cibler :", team.map((c) => c.name))
        this.team = team;
        super.asking();
    }


    resolve(choice: string | null): void {
        if (choice) {
            if (this.team[parseInt(choice) - 1] != undefined) {
                this.cible = parseInt(choice) - 1;
            } else {
                console.log("Faites un choix valide !");
                super.asking();
            }
        } else {
            console.log("Vous n'avez pas choisi de cible");
            super.asking()
        }
    }
}
