import { Character } from "./Characters/Character.ts";
import { Monstre } from "./Characters/Monster.ts";
import { Menu } from "./Menu/Menu.ts";


export class Fight {

    allyTeam: Character[];
    enemyTeam: Character[];

    constructor(
        allyTeam: Character[],
        enemyTeam: Character[],
    ) {
        this.allyTeam = allyTeam;
        this.enemyTeam = enemyTeam;
        let index = 0;
        while (!this.isFinished()) {
            let character = this.allCharacter[index%this.allCharacter.length];
            if (character instanceof Monstre) {
                character.attackAlly(this.allyTeam);
                index++
            } else {
                console.log(character.name + " is my turn");
                new FightMenu(character, this.enemyTeam.filter(c=> !c.isDead), this.allyTeam);
                index++
            }
        }
    }

    public get allCharacter(): Character[] {
        return this.allyTeam.concat(this.enemyTeam).filter((c) => !c.isDead).sort((a, b) => b.speed - a.speed);
    }

    isFinished(): boolean {
        if (this.enemyTeam.every((c) => c.isDead)) {
            console.log("You win !");
            return true;
        }
        if (this.allyTeam.every((c) => c.isDead)) {
            console.log("You loose");
            return true;
        }
        return false;
    }
}


export class FightMenu extends Menu {

    character: Character;

    enemies: Character[];

    allies: Character[];

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
        this.allies = allies
        super.asking();
    }

    resolve(choice: string | null): void {
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
                        } else {
                            console.log("Nothing append");
                            super.asking();
                        }
                    }
                }
                break;
            case "3":

                break;
        }
    }
}


export class CibleMenu extends Menu {

    cible: number = -1;

    constructor(ennemyTeam: Character[]) {
        super("Choissisez quel adversaire attaquer!", ennemyTeam.map((c) => c.name))
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
