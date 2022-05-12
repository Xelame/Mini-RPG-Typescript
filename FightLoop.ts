
import { Menu } from "./Menu/Menu.ts";
import { Fight } from "./Fight.ts";
import { FightMenu } from "./Fight.ts";
import {Character} from "./Characters/Character.ts"
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
                switch (choice) {
                    case "1":
                        this.fightMenu.asking()
                        break;
                    case "2":
                   //   allCharacterOrderFight[i].specialAttack(this.fight.enemyTeam)
                        break;
                    case "3":
                        break;
                }
          //  }else{
             // allCharacterOrderFight[i].attackAlly(this.fight.allyTeam)
              console.log("attaque enemie ")
            }
    }