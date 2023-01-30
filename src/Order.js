const { v4: uuidv4 } = require("uuid");

export class Order {
  basket; //the basket is an array of Salads
  uuid;
  constructor() {
    this.uuid = uuidv4();
    this.basket = [];
    return this;
  }
  //adds the specified number of Salad objects to the basket
  add(salad, num) {
    while (num > 0) {
      this.basket.push(salad);
      num--;
    }

    return this;
  }
  //removes the salad from the basket
  remove(salad) {
    if (this.basket.length <= 0) {
      console.log("Basket empty");
      return this;
    }
    this.basket.pop(salad);
    return this;
  }
  //calculates the total price of the order
  getPrice() {
    return this.basket.reduce((acc, curr) => {
      return acc + curr.getPrice();
    }, 0);
  }
}
