export interface People {
  name: string;
  height: number;
  present(): string;
}

export interface IWeapon {
  name: string;
  sound: string;
  attack(target: People): void;
}

export interface Warrior {
  attack(target: People): void;
}

export class Weapon implements IWeapon {
  constructor(public name: string, public sound: string) {}
  attack(target: People) {
    console.log(
      `I am attacking ${target.name} with ${
        this.name
      }. ${this.sound.toUpperCase()}!`
    );
  }
}

export class Orc implements People, Warrior {
  constructor(
    public name: string,
    public height: number,
    private weapon: IWeapon
  ) {}

  get title() {
    return `the ${this.weapon.name} wielder`;
  }

  present() {
    return `I am ${this.name}, ${this.title}`;
  }

  attack(target: People) {
    this.weapon.attack(target);
  }
}

export class MiddleEarthPeople implements People {
  constructor(
    protected _name: string,
    protected _familyName: string,
    public height: number
  ) {}

  present() {
    return `I am ${this._name} from the family ${this._familyName}`;
  }

  public get name() {
    return `${this._name} ${this._familyName}`;
  }
}

export class Hobbit extends MiddleEarthPeople {}

export class Elf extends MiddleEarthPeople implements Warrior {
  private weapon: IWeapon;
  constructor(_name: string, _familyName: string, height: number) {
    super(_name, _familyName, height);
    this.weapon = new Weapon("bow", "toing");
  }
  public attack(target: People): void {
    this.weapon.attack(target);
    this.weapon.attack(target);
    this.weapon.attack(target);
  }
}

export class Human extends MiddleEarthPeople implements Warrior {
  constructor(
    _name: string,
    _familyName: string,
    height: number,
    private weapon: IWeapon
  ) {
    super(_name, _familyName, height);
  }

  public get name() {
    return this._name;
  }

  public attack(target: People): void {
    this.weapon.attack(target);
    this.weapon.attack(target);
  }
}
