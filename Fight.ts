import { Character } from "./Character/Character.ts";

export class Fight{
    allyTeam : Character[];
    enemyTeam : Character[];
    allCharacter : Character[];
    turn : Character;

    constructor(allyTeam : Character[], enemyTeam : Character[], turn : Character, allCharacter : Character[],){
        this.allyTeam = allyTeam;
        this.enemyTeam = enemyTeam;
        this.allCharacter = allCharacter;
        this.turn = turn;
    }
    whichOrder(){
        let speedArray = []
        this.allCharacter = this.allyTeam.concat(this.enemyTeam)
    for(let i = 0 ; i < this.allCharacter.length ; i++){
        if (this.allCharacter[i].currentHealth != 0) {
       speedArray.push(this.allCharacter[i].speed)
        }
    }
    let speed = speedArray.sort((a, b) => b - a)
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