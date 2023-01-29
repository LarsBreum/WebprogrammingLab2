import { useState } from "react";

function ComposeSalad(props) {
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

  const [foundation, setFoundation] = useState("Pasta");
  const [protein, setProtein] = useState("Kycklingfilé");
  const [dressing, setDressing] = useState("Ceasardressing");
  const [extra, setExtra] = useState({});

  function copyAndUpdate(oldState, e) {
    console.log("--- copyAndUpdate ---");
    let stateCopy = { ...oldState };

    if (e.target.checked) {
      stateCopy[e.target.name] = e.target.checked;
    } else {
      delete stateCopy[e.target.name];
    }

    console.log(stateCopy);

    return stateCopy;
  }

  return (
    <div className="container col-12">
      <h2>Bygg din sallad</h2>
      <form>
        <h4>Välj Bas</h4>
        <select
          value={foundation}
          onChange={(e) => {
            setFoundation(e.target.value);
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
          value={protein}
          onChange={(e) => {
            setProtein(e.target.value);
          }}
        >
          {proteins.map((name) => (
            <option
              onChange={(e) => {
                if (this.name === true) {
                  console.log(e.target.value);
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
          <label className="col-3">
            <input
              //checked={false}
              type="checkbox"
              key={name}
              name={name}
              onChange={(e) => {
                console.log(e.target.checked);
                setExtra((extra) => copyAndUpdate(extra, e));
              }}
            />
            {name}
          </label>
        ))}
        <h4>Välj Dressing</h4>
        <select
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
      </form>
    </div>
  );
}

export default ComposeSalad;
