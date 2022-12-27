export class Tour {
  id!: number;
  name!: string;
  price!: number;
  describe!: string;

  constructor(id: number, name: string, price: number, describe: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.describe = describe;
  }
}
