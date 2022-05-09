import { Character } from "./Character/Character.ts";
import { Menu } from "./menu.ts"

export class Fight{
    allyTeam : Character[];
    enemyTeam : Character[];
    allCharacter : Character[];

    constructor(allyTeam : Character[], enemyTeam : Character[], allCharacter : Character[]){
        this.allyTeam = allyTeam;
        this.enemyTeam = enemyTeam;
        this.allCharacter = this.allyTeam.concat(this.enemyTeam)
    
    }
    whichOrder(){
        const  allCharacterOrder = this.allCharacter.filter((c) => c.currentHealth > 0 );
        allCharacterOrder.sort((a,b) => b.speed - a.speed)
        console.log(allCharacterOrder)
        return allCharacterOrder
    }
    isFinished(){
        let alive = []
        let enemyAlive = []
    for (let i = 0; i < this.allyTeam.length ; i++){
        alive.push(this.allyTeam[i].isDead)
    } if(alive = [true,true,true]){
        console.log("You loose")
        return true 
    }
    for (let i = 0; i < this.enemyTeam.length ; i++){
        enemyAlive.push(this.enemyTeam[i].isDead)
    }if(enemyAlive= [true,true,true]){
        console.log("Apeller suite du jeu ")
        return true 
    }
    }
}