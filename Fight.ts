import { Character } from "./Characters/Character.ts";
import { Menu } from "./Menu/Menu.ts";
import {Inventory} from "./Inventory.ts"


export class Fight {

    allyTeam: Character[];
    enemyTeam: Character[];

    constructor(
        allyTeam: Character[],
        enemyTeam: Character[],
    ) {
        this.allyTeam = allyTeam;
        this.enemyTeam = enemyTeam;
        for (let character of this.allCharacter) {
            if (character.isMyTurn) {
                new FightMenu(character, this.enemyTeam)
            }
        }
    }

    public get allCharacter(): Character[] {
        let allCharacter = this.allyTeam.concat(this.enemyTeam).filter((c) => !c.isDead).sort((a, b) => b.speed - a.speed);
        if (allCharacter.every((c) => !c.isMyTurn)) {
            allCharacter[0].isMyTurn = true;
        } else {
            let unique = true;
            for (let characterIndex in allCharacter) {
                if (allCharacter[characterIndex].isMyTurn && unique) {
                    unique = false;
                    allCharacter[characterIndex].isMyTurn = false;
                    if (parseInt(characterIndex) + 1 < allCharacter.length) {
                        allCharacter[parseInt(characterIndex) + 1].isMyTurn = true;
                    } else {
                        allCharacter[0].isMyTurn = true;
                    }
                }
            }
        }

        return allCharacter;
    }

}


export class FightMenu extends Menu {

    character: Character;
    ally : Character[]
    enemies: Character[];

    constructor(
        character: Character,
        allCharacter: Character[],
    ) {
        super("Choissisez une action", [
            "Basic attack",
            "Special attack",
            "Use item",])
        this.character = character;
        this.enemies = allCharacter;
        this.ally = allCharacter
        super.asking();
    }

    resolve(choice: string | null): void {
        switch (choice) {
            case "1":
                this.character.attack(this.enemies[new CibleMenu(this.enemies).cible]);
                console.log()
                break;
            case "2":
                this.character.specialAttack(this.enemies[new CibleMenu(this.enemies).cible])
                break;
            case "3":
                this.character.specialAttack(this.enemies[new CibleMenu(this.enemies).cible])
                break;
        }
    }
}


export class CibleMenu extends Menu {

    cible: number = -1;

    constructor(ennemyTeam: Character[]) {
        super("Choissisez quel adversaire attaquer!", ennemyTeam.map((c) => c.name))
        super.asking()
    }


    resolve(choice: string | null): void {
        switch (choice) {
            case "1":
                this.cible = 0;
                break
            case "2":
                this.cible = 1
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
export class CibleAlly extends Menu {

    cibleAlly: number = -1;

    constructor(allyTeam: Character[]) {
        super("Choissisez quel adversaire attaquer!", allyTeam.map((c) => c.name))
        super.asking()
    }


    resolve(choice: string | null): void {
        switch (choice) {
            case "1":
                this.cibleAlly = 0;
                break
            case "2":
                this.cibleAlly = 1
                break
            case "3":
                this.cibleAlly = 2;
                break
            default:
                console.log("Veuillez choisir une option valide !");
                super.asking()
                break;
        }
    }
}