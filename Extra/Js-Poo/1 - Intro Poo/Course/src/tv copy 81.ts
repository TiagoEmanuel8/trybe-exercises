class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connection: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[], ct?: string) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connection = c;
  }

  // turnOn() {
  //   console.log(`A tv da marca ${this.brand} tem o tamanho ${this.size}, a resolução ${this.resolution}, as conexões são ${this.connection}`)
  // }
  get connectedTo(): string | undefined {
    return this._connectedTo as string;
  }

  set connectedTo(value: string) {
    if (this._connection.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

// const ligar = new Tv('Samsung', 52, '8k', ['HDMI', 'VGA'])
// ligar.turnOn()