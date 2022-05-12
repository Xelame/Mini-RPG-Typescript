
import { Menu } from "./Menu/Menu.ts";
import { Fight } from "./Fight.ts";
import { FightMenu } from "./Fight.ts";
export class FightLoop extends Menu {
    fight: Fight;
    fightMenu: FightMenu
    constructor(fight: Fight, fightMenu : FightMenu) {
        super("Choissisez une action", [
            "Basic attack",
            "Special attack",
            "Use item",])

        this.fight = fight
        this.fightMenu = fightMenu
        while (this.fight.isFinished() != true) {
            super.asking();
        }
    }
    resolve(choice: string | null): void {
        let allCharacterOrderFight = this.fight.whichOrder()
        for (let i = 0; i < allCharacterOrderFight.length; i++) {
            if (allCharacterOrderFight[i].name.includes(this.fight.allyTeam[0].name) || allCharacterOrderFight[i].name.includes(this.fight.allyTeam[1].name) || allCharacterOrderFight[i].name.includes(this.fight.allyTeam[2].name)) {
            console.log(allCharacterOrderFight[i].name )
                switch (choice) {
                    case "1":
                        this.fightMenu.asking()
                        break;
                    case "2":
                        // allCharacterOrder[i].specialAttack()
                        break;
                    case "3":
                        break;
                }
            }else{
              // allCharacterOrderFight[i].attackAlly()
            }
        }
    }
}