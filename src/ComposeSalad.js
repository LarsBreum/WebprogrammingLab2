import { useState, useEffect } from "react";
import inventory from "./inventory.ES6.js";
import { Salad } from "./Salad.js";
import Cart from "./Cart.js";
import App from "./App.js";

function ComposeSalad(props) {
  //console.log(changeState);
  let foundations = Object.keys(props.inventory).filter(
    (name) => props.inventory[name].foundation
  );
  let proteins = Object.keys(props.inventory).filter(
    (name) => props.inventory[name].protein
  );
  let dressings = Object.keys(props.inventory).filter(
    (name) => props.inventory[name].dressing
  );
  let extras = Object.keys(props.inventory).filter(
    (name) => props.inventory[name].extra
  );

  //! FUNCTIONS _______________________________________________________
  function copyAndUpdate(oldState, e) {
    let stateCopy = { ...oldState };
    e.target.checked
      ? (stateCopy[e.target.name] = e.target.checked)
      : delete stateCopy[e.target.name];
    return stateCopy;
  }

  //! REACT hook useState _______________________________________________________
  const [foundation, setFoundation] = useState("Pasta");
  const [protein, setProtein] = useState("Kycklingfilé");
  const [dressing, setDressing] = useState("Ceasardressing");
  const [extra, setExtra] = useState({});
  /**
   * Should clear form after submit
   */

  return (
    <div className="container col-12">
      <h2>Bygg din sallad</h2>

      {/* //! FORM ________________________________________________________________ */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          let mySalad = new Salad()
            .add(foundation, inventory[foundation])
            .add(protein, inventory[protein])
            .add(dressing, inventory[dressing]);

          Object.keys(extra).forEach((extra) =>
            mySalad.add(extra, inventory[extra])
          );

          props.setSalad(mySalad);

          /**
           * Should clear form after submit
           */

          //console.log("----mySalad:");
          // console.log(mySalad);
        }}
      >
        <h4>Välj Bas</h4>
        <select
          className="form-select"
          value={foundation}
          onChange={(e) => {
            setFoundation(e.target.value);
            // console.log(foundation);
          }}
        >
          {foundations.map((name) => (
            <option value={name} key={name} className="col-4">
              {name}
            </option>
          ))}
        </select>
        <h4>Välj Protein</h4>
        <select
          className="form-select"
          value={protein}
          onChange={(e) => {
            setProtein(e.target.value);
          }}
        >
          {proteins.map((name) => (
            <option
              onChange={(e) => {
                if (this.name === true) {
                  //console.log(e.target.value);
                }
              }}
              value={name}
              key={name}
              className="col-4"
            >
              {name}
            </option>
          ))}
        </select>
        <h4>Välj tillbehör</h4>

        {extras.map((name) => (
          <label className="col-3" key={name}>
            <input
              type="checkbox"
              name={name}
              onChange={(e) => {
                // console.log(e.target.name)
                setExtra((extra) => copyAndUpdate(extra, e));
              }}
            />
            {name}
          </label>
        ))}
        <h4>Välj Dressing</h4>
        <select
          className="form-select"
          value={dressing}
          onChange={(e) => {
            setDressing(e.target.value);
          }}
        >
          {dressings.map((name) => (
            <option value={name} key={name} className="col-4">
              {name}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" type="submit">
          Lägg till
        </button>
      </form>
    </div>
  );
}

export default ComposeSalad;
