import { useState, useEffect } from "react";
import OrderConfirmation from "./OrderConfirmation.js";

function ViewOrder(props) {
  const [order, setOrder] = useState(props.order); //varukorg

  //const [confirmedOrders, setCornfirmedOrders] = useState([]);
  const [latestOrder, setLatestOrder] = useState([]);
  //takes the url to the server, and an array of ingredient arrays
  const URL = "http://localhost:8080/orders";
  let orderStatus;
  //Takes a url to post, and an array of sallad ingredient arrays
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
        {order.reduce((acc, curr) => {
          return acc + curr.getPrice();
        }, 0)}
      </div>
      {order.map((salad) => {
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
          orderStatus = postOrder(URL, orderArr)
            .then((o) => {
              //store the order in local storage
              localStorage.setItem(
                JSON.stringify(o.uuid),
                JSON.stringify(o.order)
              );

              return o;
            })
            .then((order) => {
              setLatestOrder(order);
              //empty the order when user succesfully orders
              setOrder([]);
            })
            .catch((error) => console.log("Error occured :(" + error));
        }}
      >
        Beställ!
      </button>

      <div>
        <OrderConfirmation latestOrder={latestOrder}></OrderConfirmation>
      </div>
    </div>
  );
}

export default ViewOrder;
