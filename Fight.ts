import { Character } from "./Characters/Character.ts";
import { Monstre } from "./Characters/Monster.ts";
import { ActionMenu } from "./Menu/Action.ts"



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
                console.log(character.name + " Turn");
                new ActionMenu(character, this.enemyTeam.filter(c=> !c.isDead), this.allyTeam);
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