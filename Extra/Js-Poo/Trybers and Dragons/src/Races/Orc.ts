import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.addInstancies();
    this._maxLifePoints = 74;
  }

  get maxLifePoints() { return this._maxLifePoints; }
  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  protected static addInstancies(): void {
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}