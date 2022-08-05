class Tamagoshi {
  public readonly nome: string;
  public readonly sobrenome: string;
  private fome: number;
  private saude: number;
  private idade: number;

  private _temEspaço(fullname: string): boolean {
    return fullname.indexOf(" ") !== -1;
  }

  constructor(fullname: string) {
    if (!this._temEspaço(fullname)) {
      throw new Error("fullname precisa ter espaço entre nome e sobrenome");
    }

    const [first, last] = fullname.split(" ");
    this.nome = first;
    this.sobrenome = last;
    this.idade = 0;
    this.fome = 100;
    this.saude = 100;
  }

  private taComFome(): boolean {
    return this.fome < 60;
  }

  /* Método que informa o status do bichinho virtual. */
  public status(): string {
    if (this.saude < 50) {
      return "Tô dodói.";
    }
    if (this.taComFome()) {
      return "Tô com fome.";
    }
    return "Tô legal";
  }

  public alimentar(): void {
    this.fome = this.fome + 10 > 100 ? 100 : this.fome + 10;
  }

  public tic(): void {
    this.idade += 1;
    this.fome -= 10;
  }
}

const babi = new Tamagoshi("Babi Balu");
const pacheco = new Tamagoshi("Pacheco Diniz");
pacheco.tic();
pacheco.tic();
pacheco.tic();
pacheco.tic();
pacheco.tic();
console.log(pacheco.status());
console.log(babi.status());

const juju = new Tamagoshi("Jujuju");
console.log(juju.status()); // nunca chega aqui pq dá erro antes
