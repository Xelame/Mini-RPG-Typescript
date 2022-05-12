import { Character } from "./Characters/Character.ts";
import { Monstre } from "./Characters/Monster.ts";
import { Inventory } from "./Inventory.ts";
import { AdventureParty } from "./Menu/AdventureParty.ts";
import { ChestRoom } from "./Menu/ChestRoom.ts";
import { Fight } from "./Fight.ts"

class GameManager {

    public group: Character[] = [];

    private monsterdb: Character[] = [new Monstre("Vampire", '🧛', 50, 40, 5), new Monstre("Ogre", '👹', 30, 60, 2), new Monstre("Fantôme", '👻', 40, 20, 8), new Monstre("Zombie",'🧟', 40, 40, 3), new Monstre("Squelette", '💀', 40, 20, 4)];

    private static _instance: GameManager;

    public static get instance(): GameManager {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    }

    private constructor() { }

    public run(): void {
        this.group = new AdventureParty().party;
        new Fight(this.group, this.generateMonsterParty())
        new ChestRoom(this.group)
        console.log(Inventory.instance.items);
    }

    private generateMonsterParty(): Character[] {
        let monsterParty = [];
        while (monsterParty.length < 3) {
            monsterParty.push(this.monsterdb[Math.floor(Math.random() * this.monsterdb.length)])
        }
        return monsterParty;
    }
}

GameManager.instance.run()
