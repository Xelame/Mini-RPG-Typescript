import { Character } from "./Characters/Character.ts";
import { Menu } from "./Menu/Menu.ts";

export class Fight {
    allyTeam: Character[];
    enemyTeam: Character[];
    allCharacter: Character[];

    constructor(
        allyTeam: Character[],
        enemyTeam: Character[],
        allCharacter: Character[],
    ) {
        this.allyTeam = allyTeam;
        this.enemyTeam = enemyTeam;
        this.allCharacter = this.allyTeam.concat(this.enemyTeam);
    }
    isFinished(): boolean {
        let alive = [];
        let enemyAlive = [];
        for (let i = 0; i < this.allyTeam.length; i++) {
            alive.push(this.allyTeam[i].isDead);
        }
        if (alive = [true, true, true]) {
            console.log("You loose");
            return true;
        }
        for (let i = 0; i < this.enemyTeam.length; i++) {
            enemyAlive.push(this.enemyTeam[i].isDead);
        }
        if (enemyAlive = [true, true, true]) {
            console.log("Apeller suite du jeu ");
            return true;
        }
        return false;
    }
    whichOrder(): Character[] {
        const allCharacterOrder = this.allCharacter.filter((c) =>
            c.currentHealth > 0
        );
        allCharacterOrder.sort((a, b) => b.speed - a.speed);
        console.log(allCharacterOrder);
        return allCharacterOrder;
    }
}
export class FightMenu extends Menu {
    fight: Fight;
    constructor(fight: Fight) {
        super("Choissisez quel adversaire attaquer!", [
           //fight.enemyTeam.name[0],
            "enemie1",
            "enemie2",
        ])
        this.fight = fight
    }

    resolve(choice: string | null): void {
        let allCharacterOrderFight = this.fight.whichOrder()
        for (let i = 0; i < allCharacterOrderFight.length; i++) {
            if (allCharacterOrderFight[i].name.includes(this.fight.allyTeam[0].name) || allCharacterOrderFight[i].name.includes(this.fight.allyTeam[1].name) || allCharacterOrderFight[i].name.includes(this.fight.allyTeam[2].name)) {
                console.log(allCharacterOrderFight[i].name)
                switch (choice) {
                    case "1":
                        allCharacterOrderFight[i].attack(this.fight.enemyTeam[0])
                        break;
                    case "2":
                        allCharacterOrderFight[i].attack(this.fight.enemyTeam[1])
                        break;
                    case "3":
                        allCharacterOrderFight[i].attack(this.fight.enemyTeam[2])
                        break;
                    default:
                        console.log("Veuillez choisir une option valide !");
                        break;
                }
            }
        }
    }
}