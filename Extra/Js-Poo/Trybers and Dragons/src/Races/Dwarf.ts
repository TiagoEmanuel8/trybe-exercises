import Race from './Race';

export default class Dwarf extends Race {
  protected _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.addInstancies();
    this._maxLifePoints = 80;
  }

  get maxLifePoints() { return this._maxLifePoints; }
  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  protected static addInstancies(): void {
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}