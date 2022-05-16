import { Character } from "./Characters/Character.ts";
import { Monstre } from "./Characters/Monster.ts";
import { ActionMenu } from "./Menu/Action.ts"



export class Fight {

    private allyTeam: Character[];
    private enemyTeam: Character[];

    constructor(
        allyTeam: Character[],
        enemyTeam: Character[],
    ) {
        this.allyTeam = allyTeam;
        this.enemyTeam = enemyTeam;
        let index = 0;
        while (!this.isFinished()) {
            console.clear();
            this.affichage();
            let character = this.allCharacter[index%this.allCharacter.length];
            if (character instanceof Monstre) {
                character.attackAlly(this.allyTeam.filter((c) => !c.isDead));
                index++
            } else {
                console.log("Au Tour de " + character.name);
                new ActionMenu(character, this.enemyTeam.filter(c=> !c.isDead), this.allyTeam);
                index++
            }
        }
    }

    public get allCharacter(): Character[] {
        return this.allyTeam.concat(this.enemyTeam).filter((c) => !c.isDead).sort((a, b) => b.speed - a.speed);
    }

    public isFinished(): boolean {
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

    public affichage(): void {
        console.log("Ally team : ");
        for (let character of this.allyTeam) {
            let healthBar = ""
            let voidBar = ""
            for (let i = 0; i < character.currentHealth; i++) {
                healthBar += "█"
            }
            for (let i = 0; i < (character.maxHealth - character.currentHealth); i++) {
                voidBar += "█"
            }
            console.log(character.emoji + ` %c${healthBar}` + `%c${voidBar}`, "color: green", "color: red");
        }
        console.log("Enemy team : ");
        for (let character of this.enemyTeam.filter((c) => !c.isDead)) {
            let healthBar = ""
            let voidBar = ""
            for (let i = 0; i < character.currentHealth; i++) {
                healthBar += "█"
            }
            for (let i = 0; i < (character.maxHealth - character.currentHealth); i++) {
                voidBar += "█"
            }
            console.log(character.emoji + ` %c${healthBar}` + `%c${voidBar}`, "color: green", "color: red");
        }
    }
}