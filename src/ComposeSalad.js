import { useState, useEffect } from "react";
import inventory from "./inventory.ES6.js";
import { Salad } from "./Salad.js";
import { useNavigate, Link } from "react-router-dom";

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

  const navigate = useNavigate();
  /**
   * Should clear form after submit
   */

  return (
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
        <h4>V??lj Bas</h4>
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
          <option value="">V??lja en bas</option>
          {foundations.map((name) => (
            <option value={name} key={name} className="col-4">
              {name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">V??nligen v??lj ett alternativ</div>
        <h4>V??lj Protein</h4>
        <select
          required
          className="form-select"
          value={protein}
          onChange={(e) => {
            e.target.parentElement.classList.add("was-validated");
            setProtein(e.target.value);
          }}
        >
          <option value="">V??lja en protein</option>
          {proteins.map((name) => (
            <option value={name} key={name} className="col-4">
              {name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">V??nligen v??lj ett alternativ</div>
        <h4>V??lj tillbeh??r</h4>
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
              <Link
                className="link-primary text-decoration-none"
                to="/view-ingredient/"
                key={name}
                state={{ extra: name }}
              >
                {name}
              </Link>
            }
          </label>
        ))}
        <h4>V??lj Dressing</h4>
        <select
          required
          className="form-select"
          value={dressing}
          onChange={(e) => {
            e.target.parentElement.classList.add("was-validated");
            setDressing(e.target.value);
          }}
        >
          <option value="">V??lj en dressing</option>
          {dressings.map((name) => (
            <option value={name} key={name} className="col-4">
              {name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">V??nligen v??lj ett alternativ</div>
        <button className="btn btn-primary" type="submit">
          L??gg till
        </button>
      </form>
    </div>
  );
}

export default ComposeSalad;
