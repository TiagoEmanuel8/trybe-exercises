import Race from './Race';

export default class Halfling extends Race {
  protected _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.addInstancies();
    this._maxLifePoints = 60;
  }

  get maxLifePoints() { return this._maxLifePoints; }
  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  protected static addInstancies(): void {
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}