import { Character } from "./Character/Character.ts";
import { Menu } from "./menu.ts";
import { Fight } from "./Fight.ts"

export class GameManager {

    public adventurerGroup: Character[] = [];
    private static _instance: GameManager;
    public static get instance(): GameManager {
        if (!GameManager._instance) {
            GameManager._instance = new GameManager();
        }
        return GameManager._instance;
    }
    
    private constructor() {}

    public launch(): void {

    }
}
