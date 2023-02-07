import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import inventory from "./inventory.ES6";
import ComposeSalad from "./ComposeSalad";
import ViewOrder from "./ViewOrder";
import { useState, useEffect } from "react";
import { Salad } from "./Salad";
import { Route, Routes, Link } from "react-router-dom";
import ViewIngredient from "./ViewIngredient";

function App(props) {
  let extras = Object.keys(inventory).filter((name) => inventory[name].extra);
  //const [currentSalad, setSalad] = useState(new Salad());
  const [order, setOrder] = useState([]);
  //let order = new Order();

  /* useEffect(() => {
    setOrder([...order, currentSalad]);
  }, [currentSalad]); */

  function Header(props) {
    return (
      <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Min egen salladsbar</span>
      </header>
    );
  }

  function NavBar(props) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Hem
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/compose-salad">
            Skapa salad
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view-order">
            Din beställning
          </Link>
        </li>
      </ul>
    );
  }

  function PageContent(props) {
    return (
      <>
        <Routes>
          <Route
            path=""
            element={
              <h1 className="title">- Välkommen till din egen Salladsbar -</h1>
            }
          />
          <Route
            path="view-order"
            element={
              <div className="container col-12">
                <div className="row h-200 p-5 bg-light border rounded-3">
                  <h2>Din beställning</h2>
                  <ViewOrder order={order} setOrder={setOrder} />
                </div>
              </div>
            }
          />
          <Route
            path="compose-salad"
            element={
              <div className="container col-12">
                <div className="row h-200 p-5 bg-light border rounded-3">
                  <h2>Välj innehållet i din sallad</h2>
                  <ComposeSalad
                    inventory={inventory}
                    setSalad={(salad) => setOrder([...order, salad])}
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/view-ingredient/"
            element={<ViewIngredient inventory={inventory}></ViewIngredient>}
          ></Route>
          <Route
            path="*"
            element={
              <>
                <h1 className="title">Sidan finns inte</h1>
                <Link className="btn btn-primary" to="/">
                  Gå till startsidan
                </Link>
              </>
            }
          />
        </Routes>
      </>
    );
  }

  function Footer(props) {
    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering, la8177br-s, el1461ta-s
    </footer>;
  }

  return (
    <div className="container py-4">
      <Header />
      <NavBar />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
