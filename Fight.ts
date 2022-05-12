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
        while (!this.isFinished()){
        for (let character of this.allCharacter) {
            console.log(character.name + " is my turn");
            if (character instanceof Monstre) {
                character.attackAlly(this.allyTeam);
                console.log( character.name + " attaque")
            } else {
                new FightMenu(character, this.enemyTeam);
            }
        }
    }
    }
    isFinished(): boolean {
        if (this.allyTeam.every(c => c.isDead)) {
            console.log("You loose");
            return true;
        }
        if (
            this.enemyTeam.every(c => c.isDead)) {
            console.log("Apeller suite du jeu ");
            return true;
        }
        return false;
    }
    public get allCharacter(): Character[] {
        return this.allyTeam.concat(this.enemyTeam).filter((c) => !c.isDead).sort((a, b) => b.speed - a.speed);
    }
}


export class FightMenu extends Menu {

    character: Character;

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
        super.asking();
    }

    resolve(choice: string | null): void {
        switch (choice) {
            case "1":
                let cible = new CibleMenu(this.enemies).cible
                this.character.attack(this.enemies[cible]);
                break;
            case "2":

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
