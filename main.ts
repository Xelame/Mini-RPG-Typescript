import { Character } from "./Characters/Character.ts";
import { Monstre } from "./Characters/Monster.ts";
import { Inventory } from "./Inventory.ts";
import { AdventureParty } from "./Menu/AdventureParty.ts";
import { Fight } from "./Fight.ts"

class GameManager {

    public group: Character[] = [];

    private static _instance: GameManager;

    public static get instance(): GameManager {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    }

    private constructor() { }

    private generateMonsterParty(): Character[] {
        let monsterParty = [];
        while (monsterParty.length < 3) {
            let luck = Math.floor(Math.random() * 4)
            switch (luck) {
                case 0:
                    monsterParty.push(new Monstre("Vampire", '🧛', 50, 40, 5));
                    break;
                case 1:
                    monsterParty.push(new Monstre("Ogre", '👹', 30, 60, 2));
                    break;
                case 2:
                    monsterParty.push(new Monstre("Fantôme", '👻', 40, 20, 8));
                    break;
                case 3:
                    monsterParty.push(new Monstre("Zombie",'🧟', 40, 40, 3));
                    break;
                case 4:
                    monsterParty.push(new Monstre("Squelette", '💀', 40, 20, 4));
                    break;
            }
        }
        return monsterParty;
    }

    public run(): void {
        this.group = new AdventureParty().party;
        // new ChestRoom(this.group)
        new Fight(this.group, this.generateMonsterParty())
       // console.log(Inventory.instance.items);
    }
}

GameManager.instance.run()