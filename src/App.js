import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//import inventory from "./inventory.ES6";
import ComposeSalad from "./ComposeSalad";
import ViewOrder from "./ViewOrder";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ViewIngredient from "./ViewIngredient";

function App(props) {
  const [inventory, setInventory] = useState({});
  //let extras = Object.keys(inventory).filter((name) => inventory[name].extra);
  //const [currentSalad, setSalad] = useState(new Salad());
  const [order, setOrder] = useState([]);

  useEffect(() => {
    let oldInventory = { ...inventory };

    //Updates inventory with foundations
    let foundationsKeys = fetchCategoryList("foundations").then((keys) => {
      const promises = keys.map((key) => fetchIngredient("foundations", key));

      Promise.all(promises).then((data) => {
        let ingredientObj = Object.assign(...Object.values(data));
        setInventory((oldInventory) => merge(oldInventory, ingredientObj));
      });
    });

    //updates inventory with proteins
    let proteinKeys = fetchCategoryList("proteins").then((keys) => {
      const promises = keys.map((key) => fetchIngredient("proteins", key));

      Promise.all(promises).then((data) => {
        let ingredientObj = Object.assign(...Object.values(data));
        setInventory((oldInventory) => merge(oldInventory, ingredientObj));
      });
    });

    //updates inventory with extras
    let extrasKeys = fetchCategoryList("extras").then((keys) => {
      const promises = keys.map((key) => fetchIngredient("extras", key));

      Promise.all(promises).then((data) => {
        let ingredientObj = Object.assign(...Object.values(data));
        setInventory((oldInventory) => merge(oldInventory, ingredientObj));
      });
    });

    //updates inventory with dressings
    let dressingsKeys = fetchCategoryList("dressings").then((keys) => {
      //gets keys
      const promises = keys.map((key) => fetchIngredient("dressings", key)); //fetches each ingredient
      //when all promises are fulfulled, gather each ingredient into an object and send it to merge()
      Promise.all(promises).then((data) => {
        let ingredientObj = Object.assign(...Object.values(data));
        setInventory((oldInventory) => merge(oldInventory, ingredientObj));
      });
    });
  }, [ComposeSalad]); //only update when the ComposeSalad component renders

  // console.log("---Inventory after update---");
  // console.log(inventory);

  //takes in the current inventory and an object of fetched ingredients. Returns the new state
  function merge(oldInventory, fetchedIngredients) {
    let stateCopy = { ...oldInventory };

    Object.keys(fetchedIngredients).forEach((key) => {
      stateCopy[key] = fetchedIngredients[`${key}`];
    });
    return stateCopy;
  }

  async function fetchIngredient(category, name) {
    const url = `http://localhost:8080/${category}/${name}`;
    let ingredient = {};
    const values = await safeFetchJson(url).then((data) => {
      ingredient = { [name]: { ...data } };
    });
    return ingredient;
  }
  // returns a list of the options in the category
  function fetchCategoryList(category) {
    const url = `http://localhost:8080/${category}`;
    return safeFetchJson(url);
  }

  function safeFetchJson(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(`${url} returned status ${response.status}`);
      }
      return response.json();
    });
  }

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
          <Link className="nav-link " to="/">
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
    return (
      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering, la8177br-s, el1461ta-s
      </footer>
    );
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
