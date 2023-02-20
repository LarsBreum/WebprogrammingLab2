import { useState, useEffect } from "react";
import inventory from "./inventory.ES6.js";
import { Salad } from "./Salad.js";
import { useNavigate, Link, useParams, NavLink } from "react-router-dom";
import ViewIngredient from "./ViewIngredient.js";

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
  const [foundation, setFoundation] = useState("");
  const [protein, setProtein] = useState("");
  const [dressing, setDressing] = useState("");
  const [extra, setExtra] = useState({});

  let { ing } = useParams();

  const navigate = useNavigate();
  /**
   * Should clear form after submit
   */

  return (
    <>
      <div className="container col-12">
        <h2>Bygg din sallad</h2>

        {/* //! FORM ________________________________________________________________ */}
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            if (!e.target.checkValidity()) {
              e.target.classList.add("was-validated");
              return;
            }

            let mySalad = new Salad()
              .add(foundation, inventory[foundation])
              .add(protein, inventory[protein])
              .add(dressing, inventory[dressing]);

            Object.keys(extra).forEach((extra) =>
              mySalad.add(extra, inventory[extra])
            );

            props.setSalad(mySalad);

            navigate("/view-order");

            /**
             * Should clear form after submit
             */

            //console.log("----mySalad:");
            // console.log(mySalad);
          }}
        >
          <h4>Välj Bas</h4>
          <select
            required
            className="form-select"
            value={foundation}
            onChange={(e) => {
              e.target.parentElement.classList.add("was-validated");
              setFoundation(e.target.value);
              // console.log(foundation);
            }}
          >
            <option value="">Välja en bas</option>
            {foundations.map((name) => (
              <option value={name} key={name} className="col-4">
                {name}
              </option>
            ))}
          </select>

          <NavLink
            className="btn btn-primary btn-sm"
            to={"/view-ingredient/" + foundation}
          >
            View Info
          </NavLink>

          <div className="invalid-feedback">Vänligen välj ett alternativ</div>
          <h4>Välj Protein</h4>
          <select
            required
            className="form-select"
            value={protein}
            onChange={(e) => {
              e.target.parentElement.classList.add("was-validated");
              setProtein(e.target.value);
            }}
          >
            <option value="">Välja en protein</option>
            {proteins.map((name) => (
              <option value={name} key={name} className="col-4">
                {name}
              </option>
            ))}
          </select>
          <NavLink
            className="btn btn-primary btn-sm"
            to={"/view-ingredient/" + protein}
          >
            View Info
          </NavLink>

          <div className="invalid-feedback">Vänligen välj ett alternativ</div>
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
              {
                <>
                  <span key="{name}">{name}</span>
                  <br></br>
                  <NavLink
                    className="btn btn-primary btn-sm"
                    to={"/view-ingredient/" + name}
                    key={name}
                  >
                    View Info
                  </NavLink>
                </>
              }
            </label>
          ))}
          <h4>Välj Dressing</h4>
          <select
            required
            className="form-select"
            value={dressing}
            onChange={(e) => {
              e.target.parentElement.classList.add("was-validated");
              setDressing(e.target.value);
            }}
          >
            <option value="">Välj en dressing</option>
            {dressings.map((name) => (
              <option value={name} key={name} className="col-4">
                {name}
              </option>
            ))}
          </select>
          <NavLink
            className="btn btn-primary btn-sm"
            to={"/view-ingredient/" + dressing}
          >
            View Info
          </NavLink>
          <div className="invalid-feedback">Vänligen välj ett alternativ</div>
          <button className="btn btn-primary" type="submit">
            Lägg till
          </button>
        </form>
      </div>
    </>
  );
}

export default ComposeSalad;
