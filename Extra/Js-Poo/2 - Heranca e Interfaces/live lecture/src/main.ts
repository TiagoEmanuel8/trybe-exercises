class MiddleEarthPerson {
  // método chamado por subclasses
  protected name: string;
  height: number;

  constructor(name: string, height: number) {
    this.name = name;
    this.height = height;
  }
}

// interface define regras para uma classe
interface MagicalPerson {
  power: string;
  sayPower(): void;
}

// a classe anão herda uma personalidade da terra média
class Dwarf extends MiddleEarthPerson {
  heightBeard: number; // altura barba
  colorBeard: string // cor da barba

  constructor(
    name: string, height: number, heightBeard: number, colorBeard: string
  ) {
    // super - é uma forma de referenciar a superclasse
    super(name, height);
    this.heightBeard = heightBeard;
    this.colorBeard = colorBeard;
  }
  // chamando variavel da superclasse
  say(){
    console.log(`Nome do anão: ${this.name}`)
  }
}

interface Warrior {
  weapons: string[];
}

// implements puxa a interface
class Elf extends MiddleEarthPerson implements MagicalPerson, Warrior{
  kindBow: string;
  power: string;
  weapons: string[];

  constructor(
    name: string, height: number, kindBow: string
  ) {
    super(name, height)
    this.kindBow = kindBow
    this.power = 'Mira precisa'
    this.weapons = ['machado']
  }
  // usa a função da interface
  sayPower(): void {
      console.log(`Meu poder é: ${this.power}`)
  }
}

const character1 = new MiddleEarthPerson('Frodo', 1.2);
console.log(character1);

const character2 = new Dwarf('Gimli', 1.3, 0.5, 'gray');
console.log(character2);
character2.say();

const character3 = new Elf('Legolas', 2.3, 'long bow');
console.log(character3)
character3.sayPower();

class Army {
  // isso é uma composição
  soldiers: MiddleEarthPerson[];

  constructor(){
    this.soldiers = [];
  }

  add(person: MiddleEarthPerson){
    this.soldiers.push(person)
  }
}