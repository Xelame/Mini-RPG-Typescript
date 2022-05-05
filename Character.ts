export class Character {
    /**
     * Nom du personnage
     */
    name : string;

    /**
     * Puissance d'attaque physique
     */
    physicalAttack : number;

    /**
     * Puissance défensive physique
     */
    physicalArmor : number;

    /**
     * Vitesse du personnage
     */
    speed : number;

    /**
     * Point de vie maximum du personnage
     */
    maxHealth : number;

    /**
     * Point de vie actuel du personnage
     */
    currentHealth : number;

    /**
     * Notre personnage est créer vivant
     */
    isDead : boolean = false;

    /**
     * Constructeur de notre classe Character
     * @param name Nom du personnage
     * @param physicalAttack Attaque physique
     * @param physicalArmor Défense physique
     * @param speed Vitesse du personnage
     * @param maxHealth Point de vie du personnage
     */
    constructor(name : string, physicalAttack : number, physicalArmor : number, speed : number, maxHealth : number) {
        this.name = name;
        this.physicalAttack = physicalAttack;
        this.physicalArmor = physicalArmor;
        this.speed = speed;
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
    }

    /**
     * Fonction qui permet d'attaquer un autre personnage
     * @param target Cible du personnage
     */
    attack(target : Character) : void {
        const damage = Math.max(this.physicalAttack - target.physicalArmor, 1)
        target.currentHealth = Math.max(this.currentHealth - damage, 0);
    }

    /**
     * Fonction qui permet de soigner le personnage
     * @param percent Pourcentage de point de vie à récupérer
     */
    heal(percent : number) : void {
        const amount = Math.round(this.maxHealth * percent / 100);
        this.currentHealth = Math.min(this.currentHealth + amount, this.maxHealth);
    }

    /**
     * Fonction qui permet de réssuciter le personnage avec un pourcentage de sa vie maximum
     * @param percent Pourcentage de point de vie à récupérer
     */
    revive(percent : number) : void {
        this.currentHealth = Math.round(this.maxHealth* percent / 100);
        this.isDead = false;
    }

}

class Guerrier extends Character{

}
class Mage extends Character{
    
}
class Paladin extends Character{
    
}
class Barbare extends Character{
    
}
class Prêtre extends Character{
    
}
class Voleur extends Character{
    
}