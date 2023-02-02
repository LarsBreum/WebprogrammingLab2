import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import inventory from "./inventory.ES6";
import ComposeSalad from "./ComposeSalad";
import { Order } from "./Order.js";
import Cart from "./Cart.js";
import { useState, useEffect } from "react";
import { Salad } from "./Salad";

function App() {
  let extras = Object.keys(inventory).filter((name) => inventory[name].extra);
  const [currentSalad, setSalad] = useState(new Salad());
  const [order, setOrders] = useState([currentSalad]);
  //let order = new Order();

  useEffect(() => {
    setOrders([...order, currentSalad]);
  }, [currentSalad]);

  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Min egen salladsbar</span>
      </header>

      <div className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h2>Välj innehållet i din sallad</h2>
          <ComposeSalad inventory={inventory} setSalad={setSalad} />
        </div>
        <div>
          <h2>Din beställning</h2>
          <ul>
            {useEffect(() => {
              console.log(order);
              /**
               * Should print salad ingredients, price and number
               * and total order price
               */
            }, [currentSalad])}
          </ul>
        </div>
      </div>

      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering, la8177br-s, el1461ta-s
      </footer>
    </div>
  );
}

export default App;
