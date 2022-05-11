import { Character } from "./Characters/Character.ts";
import { Inventory } from "./Inventory.ts";
import { AdventureParty } from "./Menu/AdventureParty.ts";
import { ChestRoom } from "./Menu/ChestRoom.ts";

class GameManager {

    public group: Character[] = [];

    private static _instance: GameManager;
    public static get instance(): GameManager {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    }
    
    private constructor() {}

    public launch(): void {
        this.group = new AdventureParty().party;
        new ChestRoom(this.group)
        console.log(Inventory.instance.items);
    }
}

GameManager.instance.launch()
