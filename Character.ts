export class Character {
  /**
   * Nom du personnage
   */
  name: string;

  /**
   * Puissance d'attaque physique
   */
  physicalAttack: number;

  /**
   * Puissance défensive physique
   */
  physicalArmor: number;

  /**
   * Vitesse du personnage
   */
  speed: number;

  /**
   * Point de vie maximum du personnage
   */
  maxHealth: number;

  /**
   * Point de vie actuel du personnage
   */
  currentHealth: number;

  /**
   * Notre personnage est créer vivant
   */
  isDead: boolean = false;

  /**
   * Constructeur de notre classe Character
   * @param name Nom du personnage
   * @param physicalAttack Attaque physique
   * @param physicalArmor Défense physique
   * @param speed Vitesse du personnage
   * @param maxHealth Point de vie du personnage
   */
  constructor(
    name: string,
    physicalAttack: number,
    physicalArmor: number,
    speed: number,
    maxHealth: number,
  ) {
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
  attack(target: Character): void {
    const damage = Math.max(this.physicalAttack - target.physicalArmor, 1);
    target.currentHealth = Math.max(this.currentHealth - damage, 0);
  }

  /**
   * Fonction qui permet de soigner le personnage
   * @param percent Pourcentage de point de vie à récupérer
   */
  heal(percent: number): void {
    const amount = Math.round(this.maxHealth * percent / 100);
    this.currentHealth = Math.min(this.currentHealth + amount, this.maxHealth);
  }

  /**
   * Fonction qui permet de réssuciter le personnage avec un pourcentage de sa vie maximum
   * @param percent Pourcentage de point de vie à récupérer
   */
  revive(percent: number): void {
    this.currentHealth = Math.round(this.maxHealth * percent / 100);
    this.isDead = false;
  }
}

class Mage extends Character {
  /**
   * Mana du personnage
   */
  mana: number;

  /**
   * Puissance magique du personnage
   */
  magicAttack: number;

  /**
   * Constructeur de notre classe Mage
   * @param name Nom du Mage
   * @param physicalAttack Attaque physique du mage
   * @param physicalArmor Défense physique du mage
   * @param speed Vitesse du mage
   * @param maxHealth Point de vie du mage
   * @param mana Quantité de mana du mage
   * @param magicAttack Puissance magique du mage
   */

  constructor(
    name: string,
    physicalAttack: number,
    physicalArmor: number,
    speed: number,
    maxHealth: number,
    mana: number,
    magicAttack: number,
  ) {
    super(name, physicalAttack, physicalArmor, speed, maxHealth);
    this.mana = mana;
    this.magicAttack = magicAttack;
  }

  /**
   * Fonction qui permet de lancer un sort
   * @param target Cible du sort
   */
  specialAttack(target: Character): void {
    if (this.mana) {
      target.currentHealth = Math.max(
        target.currentHealth - this.magicAttack,
        0,
      );
      this.mana--;
    }
  }
}

class Monstre extends Character {
  /**
   * Constructeur de notre classe Monstre
   * @param name Nom du monstre
   * @param physicalAttack Attaque physique du monstre
   * @param physicalArmor Défense physique du monstre
   * @param speed Vitesse du monstre
   * @param maxHealth Point de vie du monstre
   */
  constructor(
    name: string,
    physicalAttack: number,
    physicalArmor: number,
    speed: number,
    maxHealth: number,
  ) {
    super(name, physicalAttack, physicalArmor, speed, maxHealth);
  }

  /**
   * Attaque un allié au hasard ou celui avec le moins de point de vie
   * @param targets Liste des alliés
   */
  attackAlly(targets: Character[]): void {
    const choice = Math.round(Math.random() * 100);
    if (choice <= 20) {
      const target = targets.sort((a, b) =>
        a.currentHealth - b.currentHealth
      )[0];
      this.attack(target);
    } else {
      this.attack(targets[Math.round(Math.random() * targets.length)]);
    }
  }
}

class Barbare extends Character {
  /**
   * Constructeur de notre classe Barbare
   * @param name Nom du monstre
   * @param physicalAttack Attaque physique du barbare
   * @param physicalArmor Défense physique du barbare
   * @param speed Vitesse du barbare
   * @param maxHealth Point de vie du barbare
   */
  constructor(
    name: string,
    physicalAttack: number,
    physicalArmor: number,
    speed: number,
    maxHealth: number,
  ) {
    super(name, physicalAttack, physicalArmor, speed, maxHealth);
  }

  /**
   * Attaque un ennemi au hasard si il a plus de 20 % et donc perd 20 % de sa vie
   * @param targets Liste des ennemies
   */
  specialAttack(targets: Character[]): void {
    if (this.currentHealth > this.maxHealth * 20 / 100) {
      const target = targets[Math.round(Math.random() * targets.length)];
      const damage = Math.max(
        Math.round((this.physicalAttack - target.physicalArmor) * 1.3),
        1,
      );
      target.currentHealth = Math.max(target.currentHealth - damage, 0);
      this.currentHealth -= Math.round(this.maxHealth * 20 / 100);
    }
  }
}

class Pretre extends Character {
    /**
     * Constructeur de notre classe Pretre
     * @param name Nom du Pretre
     * @param physicalAttack Attaque physique du Pretre
     * @param physicalArmor Défense physique du Pretre
     * @param speed Vitesse du Pretre
     * @param maxHealth Point de vie du Pretre
     */
     constructor(name : string, physicalAttack : number, physicalArmor : number, speed : number, maxHealth : number) {
        super(name, physicalAttack, physicalArmor, speed, maxHealth);
    }


    /**
     * Soigne un allié
     * @param target Cible du soin du Pretre
     */
    healing(target : Character) : void {
        target.heal(25);
    }
}
