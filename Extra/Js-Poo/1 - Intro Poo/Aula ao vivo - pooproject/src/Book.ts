class Book {
  private _id: number;
  private _title: string;
  private _costPrice: number;
  private _salePrice: number;

  // constructor é uma forma de definir valores padrão
  constructor(
    id: number, title: string, costPrice: number, salePrice: number
  ) {
    // this aponta para os parametros recebidos pela classe
    this._id = id;
    this._title = title;
    this._costPrice = costPrice;
    this._salePrice = salePrice;
  }

  // getter - método para ler valores que são privados
  // setter - método para alterar valores privados ...

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  // o correto é usar getter e setter por contexto

  get salePrice(): number {
    return this._salePrice;
  }
  // verifica que o preço final não pode ser menor que o preço de produção
  set salePrice(value: number) {
    if (value < this._costPrice){
      console.log('Preço de venda não pode ser menor que o preço de custo')
    } else {
      this._salePrice = value;
    }
  }

  // encapsulamento
  public adjustSalePriceByMarginProfit(marginProfit: number){
    const newSalePrice = this._costPrice * (1 + marginProfit/100)
    this._salePrice = newSalePrice
  }
}

// instanciando a classe
const book1 = new Book(1, 'Duna', 20, 30);
console.log(book1)
const book2 = new Book(2, 'Clean Code', 30, 40)
console.log(book2)

book2.salePrice = 55
console.log(book2.salePrice)

// calcula o lucro
book1.adjustSalePriceByMarginProfit(50)
console.log(book1.salePrice)
