import { Character } from "../Characters/Character.ts";
import { Inventory } from "../Inventory.ts";
import { Ether } from "../Items/Ether.ts";
import { HalfStar } from "../Items/HalfStar.ts";
import { PartStar } from "../Items/PartStar.ts";
import { Potion } from "../Items/Potion.ts";
import { Room } from "./iRoom.ts";
import { Menu } from "./Menu.ts";

export class ChestRoom extends Menu implements Room {

    type: string = "ChestRoom";

    group: Character[];

    constructor(group: Character[]) {
        super("Bienvenue dans une salle au trésors 🧰, mais ces derniers sont peut être piègé, choisissez un volontaire : ", group.map(character => character.name));
        this.group = group;
        super.asking();
    }

    resolve(choice: string | null): void {
        const openChest = (characterChoosen: Character): void => {
            if (!characterChoosen.isDead) {
                let blessed = Math.round(Math.random() * 100);
                if (blessed < 50) {
                    !characterChoosen.currentHealth--;
                    console.log(`${characterChoosen.name} a été blessé !`);
                } else {
                    for (let _ = 0; _ < 2; _++) {
                        let luck = Math.round(Math.random() * 100);
                        if (luck < 25) {
                            Inventory.instance.addItem(new Potion);
                            console.log("Vous avez trouvé un potion !");
                        } else if (luck < 50) {
                            Inventory.instance.addItem(new Ether);
                            console.log("Vous avez trouvé un éther !");
                        } else if (luck < 75) {
                            Inventory.instance.addItem(new PartStar);
                            console.log("Vous avez trouvé une partie d'étoile !");
                        } else {
                            Inventory.instance.addItem(new HalfStar);
                            console.log("Vous avez trouvé une moitié d'étoile !");
                        }
                    }
                }
            } else {
                console.log(`${characterChoosen.name} est mort il ne peut point affectuer cette tâche !`);
                super.asking();
            }
        }

        console.clear()

        switch (choice) {
            case "1":
                openChest(this.group[0]);
                break;
            case "2":
                openChest(this.group[1]);
                break;
            case "3":
                openChest(this.group[2]);
                break;
            default:
                console.log("Veuillez choisir un volontaire parmis vos combattant !");
                super.asking();
                break;
        }
    }
}