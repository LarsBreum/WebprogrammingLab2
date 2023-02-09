import { useLocation, useParams } from "react-router-dom";

function ViewIngredient(props) {
  let { state } = useLocation();
  let ingredients = { ...props.inventory };
  let { id } = useParams();
  // const name = Object.keys(ingredients).filter((key) => state.extra === key);
  const entries = Object.entries(ingredients).filter(
    (entry) => entry[0] === Object.values(state)[0]
  );
  const values = entries[0][1];
  return (
    <>
      <h1>id: {id}</h1>
      <h1 className="h1">{Object.values(state)[0]}</h1>
      <ul>
        {Object.entries(values).map((entry) => (
          <li key={entry[0]}>
            {entry[0]}: {entry[1]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ViewIngredient;
