import { Character } from "./Characters/Character.ts";
import { Boss } from "./Characters/Boss.ts"
import { Monstre } from "./Characters/Monster.ts";
import { AdventureParty } from "./Menu/AdventureParty.ts";
import { ChestRoom } from "./Menu/ChestRoom.ts";
import { FightRoom } from "./Menu/FightRoom.ts";
import { Room } from "./Menu/iRoom.ts";

class GameManager {

    public group: Character[] = [];

    private exploration: Room[] = [];

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
        this.exploration = [new FightRoom(this.group, this.generateMonsterParty()), new ChestRoom(this.group), new FightRoom(this.group, this.generateMonsterParty()), new ChestRoom(this.group), new FightRoom(this.group, new Boss("Boss", '🐲', 100, 100, 10))];
        if (this.group.some(character => !character.isDead)) {
            console.log("C'est gagné !");
        } else {
            console.log("C'est perdu !");
        }
    }
}

GameManager.instance.run()
