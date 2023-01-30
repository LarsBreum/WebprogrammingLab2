import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import inventory from "./inventory.ES6";
import ComposeSalad from "./ComposeSalad";
import Order from "./Order.js";
import Cart from "./Cart.js";
import { useState } from "react";

function App() {
  let extras = Object.keys(inventory).filter((name) => inventory[name].extra);
  // let tempId = 0;
   const [tempId, setTempId] = useState(0);
  return (
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Min egen salladsbar</span>
      </header>

      <div className="continer col-12">
        <div className="row h-200 p-5 bg-light border rounded-3">
          <h2>Välj innehållet i din sallad</h2>
          <ComposeSalad inventory={inventory} />
        </div>
        <div>
          <h2>---------From APP--------------</h2>

          {extras.map((name) => (
            <article key={name} className="col-4">
              
              {name}
            
            </article>
          ))}
        </div>
      </div>


      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering, la8177br-s, el1461ta-s
      </footer>
    </div>
  );
}

export default App;
