import { useLocation, useParams } from "react-router-dom";

function ViewIngredient(props) {
  let ingredients = { ...props.inventory };
  let { id } = useParams();
  console.log(id);
  // const name = Object.keys(ingredients).filter((key) => state.extra === key);

  return (
    <>
      <h1>id: {id}</h1>
      <h1 className="h1">{Object.values(id)}</h1>
      <ul></ul>
    </>
  );
}

export default ViewIngredient;
