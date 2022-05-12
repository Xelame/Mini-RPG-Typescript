import { Character } from "./Character/Character.ts";

export class Exploration {
    // roomChain : Room[];
}

export class Room {
    type: string;

    constructor(type: string) {
        this.type = type;
    }

    generation(): void {
        switch (this.type) {
            case 'fight':
                console.log(``)
                // new Fight();
                break;
            case 'treasure':
                console.log(``)

                const luck = Math.round(Math.random() * 100);
                if (luck < 50) {
                    for (let item = 0; item <= 2; item++) {
                        switch(Math.round(Math.random()*3)){
                            case 0:
                                // Inventory.instance.addItem(new HalfStar);
                                break
                            case 1:
                                // Inventory.instance.addItem(new PartStar);
                                break
                            case 2:
                                // Inventory.instance.addItem(new Ether);
                                break
                            case 3:
                                // Inventory.instance.addItem(new Potion);
                        }
                    }
                } 
                /*else if (luck < 100) {

                } else {

                }*/
                break;
            case 'Boss':
        
                console.log(``)
                // new Fight();
                break;
        }
    }
}

new Room('treasure').generation()