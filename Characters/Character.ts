export abstract class Character {
    /**
     * Nom du personnage
     */
    public name: string;

    /**
     * Représentation graphique du personnage
     */
    public readonly emoji: string;

    /**
     * Puissance d'attaque physique
     */
    protected readonly physicalAttack: number;

    /**
     * Puissance défensive physique
     */
    public readonly physicalArmor: number;

    /**
     * Vitesse du personnage
     */
    public readonly speed: number;

    /**
     * Point de vie maximum du personnage
     */
    public readonly maxHealth: number = 100;

    /**
     * Point de vie actuel du personnage
     */
    public currentHealth: number;

    /**
     * Notre personnage est créer vivant
     */
    private _dead: boolean = false;

    public get isDead(): boolean {
        return this.currentHealth == 0;
    }

    /**
     * Constructeur de notre classe Character
     * @param name Nom du personnage
     * @param emoji Représente le personnage
     * @param physicalAttack Attaque physique
     * @param physicalArmor Défense physique
     * @param speed Vitesse du personnage
     */
    constructor(
        name: string,
        emoji: string,
        physicalAttack: number,
        physicalArmor: number,
        speed: number,
    ) {
        this.name = name;
        this.emoji = emoji;
        this.physicalAttack = physicalAttack;
        this.physicalArmor = physicalArmor;
        this.speed = speed;
        this.currentHealth = this.maxHealth;
    }

    /**
     * Fonction qui permet d'attaquer un autre personnage
     * @param target Cible du personnage
     */
    public attack(target: Character): void {
        const damage = Math.max(this.physicalAttack - target.physicalArmor, 1);
        target.currentHealth = Math.max((target.currentHealth - damage), 0);
    }

    /**
     * Fonction qui permet de soigner le personnage
     * @param percent Pourcentage de point de vie à récupérer
     */
    public heal(percent: number): void {
        const amount = Math.round(this.maxHealth * percent / 100);
        this.currentHealth = Math.min(this.currentHealth + amount, this.maxHealth);
    }

    /**
     * Fonction qui permet de réssuciter le personnage avec un pourcentage de sa vie maximum
     * @param percent Pourcentage de point de vie à récupérer
     */
    public revive(percent: number): void {
        if (this.isDead) {
            this.currentHealth = Math.round(this.maxHealth * percent / 100);
        } else {
            console.log("Nothing append");
        }
    }

    public specialAttackOnAll(targets: Character[]): boolean {
        return false
    }

    /**
     * Soigne un allié
     * @param target Cible du soin du Character
     */
    public specialAttackOnAlly(target?: Character): boolean {
        return false;
    }

    /**
     * Fonction qui permet de lancer un sort
     * @param target Cible du sort
     */
    public specialAttackOnEnnemy(target?: Character) : boolean {
        return false
    }

    public specialAttackOnNothing() : boolean {
        return false
    }

    public attackAlly(targets: Character[]): void {
        return
    }
}

