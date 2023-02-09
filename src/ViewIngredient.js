import { useLocation } from "react-router-dom";

function ViewIngredient(props) {
  let { state } = useLocation();
  let ingredients = { ...props.inventory };
  // const name = Object.keys(ingredients).filter((key) => state.extra === key);
  const entries = Object.entries(ingredients).filter(
    (entry) => entry[0] === state.extra
  );
  const values = entries[0][1];
  return (
    <>
      <h1 className="h1">{state.extra}</h1>
      <ul className="list-group list-group-flush">
        {Object.entries(values).map((entry) => (
          <li className="list-group-item text-capitalize" key={entry[0]}>
            {entry[0]}: {entry[1]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ViewIngredient;
