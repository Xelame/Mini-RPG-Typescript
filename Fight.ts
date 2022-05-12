import { Character } from "./Characters/Character.ts";
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
    }
    isFinished(): boolean {
        let alive = [];
        let enemyAlive = [];

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
    whichOrder(): Character[] {
        const allCharacterOrder = this.allyTeam.concat(this.enemyTeam).filter((c) =>
            c.currentHealth > 0
        );
        allCharacterOrder.sort((a, b) => b.speed - a.speed);
        return allCharacterOrder;
    }
}
export class FightMenu extends Menu {
    fight: Fight;
    constructor(fight: Fight) {
        super("Choissisez quel adversaire attaquer!", [
            // fight.enemyTeam.name[0],
            "enemie1",
            "enemie2",
        ])
        this.fight = fight
    }

    resolve(choice: string | null): void {
        let allCharacterOrderFight = this.fight.whichOrder()
        for (let i = 0; i < allCharacterOrderFight.length; i++) {
            if (allCharacterOrderFight[i].name.includes(this.fight.allyTeam[0].name) || allCharacterOrderFight[i].name.includes(this.fight.allyTeam[1].name) || allCharacterOrderFight[i].name.includes(this.fight.allyTeam[2].name)) {

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