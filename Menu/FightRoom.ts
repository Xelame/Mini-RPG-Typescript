import { Character } from "../Characters/Character.ts";
import { Fight } from "../Fight.ts";
import { Room } from "./iRoom.ts";
import { Menu } from "./Menu.ts";


export class FightRoom extends Menu implements Room {

    public type: string = "FightRoom";

    private group: Character[];
    private enemies: Character[];

    constructor(group: Character[], enemies: Character[]) {
        super("Bienvenue dans une salle de combat, vous devez affronter (Appuyer sur entrée pour commencer): ", enemies.map(character => character.name));
        this.group = group;
        this.enemies = enemies;
        super.asking();
    }

    protected resolve(choice: string | null): void {
        new Fight(this.group, this.enemies);
    }
}