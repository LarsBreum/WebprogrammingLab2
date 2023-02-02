import { useState, useEffect } from "react";
import App from "./App.js";

function ViewOrder(props) {
  //let salads = props.order.filter((salad) => salad.getPrice() > 0);
  return (
    <div>
      <div className="">
        Total price:{" "}
        {props.order.reduce((acc, curr) => {
          return acc + curr.getPrice();
        }, 0)}
      </div>
      {props.order.map((salad) => {
        return (
          <div className="bg-white border rounded-3" key={salad.uuid}>
            {Object.keys(salad.ingredients).join(" ")}, pris: {salad.getPrice()}
          </div>
        );
      })}
    </div>
  );
}

export default ViewOrder;
