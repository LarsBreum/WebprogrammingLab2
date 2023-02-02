import { useState, useEffect } from "react";
import App from "./App.js";

function ViewOrder(props) {
  let salads = props.order.filter((salad) => salad.getPrice() > 0);
  return (
    <div>
      <p>
        Total price:{" "}
        {salads.reduce((acc, curr) => {
          return acc + curr.getPrice();
        }, 0)}
      </p>
      <ul>
        {salads.map((salad) => (
          <li key={salad.uuid}>
            {salad.id} {salad.getPrice()} kr{" "}
            <button
              onClick={() => {
                props.setOrder(
                  salads.filter((s) => {
                    return s.uuid !== salad.uuid;
                  })
                );
              }}
            >
              {" "}
              Remove from order
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewOrder;
