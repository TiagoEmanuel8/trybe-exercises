import { v4 as uuid } from "uuid";

class Product {
  public id: string;
  public name: string;
  private cost: number;
  private _margin = 0.2;
  public onSale = false;

  constructor(name: string, cost: number) {
    this.id = uuid();
    this.name = name;
    this.cost = cost;
  }

  get margin() {
    return this.onSale ? 0 : this._margin;
  }

  set margin(value: number) {
    if (value > 0) {
      this._margin = value;
    } else {
      console.error("Cannot set margin lower than 0.");
    }
  }

  get salePrice() {
    return (1 + this.margin) * this.cost;
  }
}

const album = new Product("Ocean Songs", 10);
album.margin = 0.5;
album.onSale = true;

console.log(album.salePrice);
