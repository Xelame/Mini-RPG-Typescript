import { Character } from "./Character.ts";

export class Fight{
    allyTeam : Character[];
    enemyTeam : Character[];
    turn : Character;

    constructor(allyTeam : Character[], enemyTeam : Character[], turn : Character){
        this.allyTeam = allyTeam;
        this.enemyTeam = enemyTeam;
        this.turn = turn;
    }
    order(allCharacter : Character[]){
    for(let i = 0 ; i < Character.length ; i++){
        
    }
    }
    isFinished(allCharacter : Character[]){

    }
}