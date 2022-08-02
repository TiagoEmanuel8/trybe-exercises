import Race from './Race';

export default class Elf extends Race {
  protected _maxLifePoints;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.addInstancies();
    this._maxLifePoints = 99;
  }

  get maxLifePoints() { return this._maxLifePoints; }
  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  protected static addInstancies(): void {
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}