"use strict";
const { v4: uuidv4 } = require("uuid");

export class Salad {
  static instanceCounter = 0;
  ingredients = {};

  constructor(arg) {
    if (typeof arg === "object") {
      //console.log(arg.ingredients);
      this.ingredients = Object.assign({}, arg.ingredients); //how to use ... operator??
    }

    if (typeof arg === "string") {
      //console.log("string: " + arg);
      this.ingredients = Object.assign({}, JSON.parse(arg));
      /*
        Object.assign(target, src) copies an object
        */
    }
    this.uuid = uuidv4();
    this.id = "salad_" + Salad.instanceCounter++;
    return this;
  }
  add(name, properties) {
    //adding "ingredient"
    this.ingredients[name] = properties;
    return this;
  }
  remove(name) {
    //delete this.name;
    delete this.ingredients[name];
    return this;
  }
  getPrice() {
    const ingre = Object.entries(this.ingredients);
    const price = ingre.reduce((acc, curr) => {
      return acc + curr[1].price;
    }, 0);
    return price;
  }
}
