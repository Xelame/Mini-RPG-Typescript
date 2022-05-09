export class inventary {
    content : [] ;
    constructor (content : []) {
        this.content = content
    }
}

export class Objet {
    potion : number;
    fragmentDetached : number;
    ether : number;

    constructor (potion : number, fragmentDetached : number, ether : number) {
        this.potion = potion;
        this.fragmentDetached = fragmentDetached;
        this.ether = ether
    }

}