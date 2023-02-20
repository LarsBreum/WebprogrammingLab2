import { useLocation, useParams } from "react-router-dom";

function ViewIngredient(props) {
  let params = useParams();
  let ingredient = props.inventory[params.name];

  // const name = Object.keys(ingredients).filter((key) => state.extra === key);

  return (
    <>
      <h1>{params.name}</h1>
      <ul>
        {Object.keys(ingredient).map((prop) => (
          <li key={prop}>{prop + " : " + ingredient[prop]}</li>
        ))}
      </ul>
    </>
  );
}

export default ViewIngredient;
