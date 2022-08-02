export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  public static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
  
  public get name(): string { return this._name; }
  public get dexterity(): number { return this._dexterity; }
  
  abstract get maxLifePoints(): number;
  
  public static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}