import { useState, useEffect } from "react";

function ViewOrder(props) {
  const [confirmedOrders, setOrders] = useState([]);
  //takes the url to the server, and an array of ingredient arrays
  const URL = "http://localhost:8080/orders";
  async function postOrder(url, order) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    return response.json();
  }
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
      <button
        className="btn btn-primary"
        type="submit"
        onClick={(e) => {
          let orderArr = props.order.map((order) => {
            return Object.keys(order.ingredients);
          });
          //console.log(orderArr);

          //Send a post request with the props.order
          postOrder(URL, orderArr)
            .then((o) => {
              //render a confirmation
              alert(
                "Order " + o.status + " Price: " + " " + o.price + " " + o.uuid
              );
              //store the order in local storage
              localStorage.setItem(
                JSON.stringify(o.uuid),
                JSON.stringify(o.order)
              );
              //empty the order when user succesfully orders
              // props.order = [];
            })
            .catch((error) => console.log("Error occures :(" + error));
        }}
      >
        Beställ!
      </button>
    </div>
  );
}

export default ViewOrder;
