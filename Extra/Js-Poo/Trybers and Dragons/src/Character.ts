import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
    race: Race = new Elf(name, 10),
    archetype: Archetype = new Mage(name),
  ) {
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = Math.round(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = this.numberRandomizer();
    this._defense = this.numberRandomizer();
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: this.numberRandomizer(),
    };
  }
  
  // GETTERS
  public get race() { return this._race; }
  public get archetype() { return this._archetype; }
  public get maxLifePoints() { return this._maxLifePoints; }
  public get lifePoints() { return this._lifePoints; }
  public get strength() { return this._strength; }
  public get defense() { return this._defense; }
  public get dexterity() { return this._dexterity; }
  public get energy(): Energy { 
    return { 
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  // METHODS
  public receiveDamage(attackPoints: number) {
    const damage: number = (attackPoints - this._defense);
    if (damage > 0 && (this._lifePoints - damage) > 0) {
      this._lifePoints -= damage;
    }
    if ((this._lifePoints - damage) <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    return enemy.receiveDamage(this._strength);
  }

  private numberRandomizer = (): number => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
  };

  public levelUp(): void {
    this.changeMaxLifePoints();
    this._strength += this.numberRandomizer();
    this._dexterity += this.numberRandomizer();
    this._defense += this.numberRandomizer();
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  private changeMaxLifePoints(): void {
    const numberToSum = this.numberRandomizer();
    if (this._maxLifePoints < this._race.maxLifePoints
      && (this._maxLifePoints + numberToSum) < this._race.maxLifePoints) {
      this._maxLifePoints += numberToSum;
    } else {
      this._maxLifePoints = this._race.maxLifePoints;
    } 
  }

  public special(): number {
    const attack = this._strength + this._dexterity;
    const energy = 5;
    if (this._energy.amount >= energy) {
      this._energy.amount -= energy;
    }
    return attack;
  }
}
