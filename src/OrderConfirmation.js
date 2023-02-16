function OrderConfirmation(props) {
  console.log(props);
  if (props.latestOrder.status === "confirmed") {
    return (
      <>
        <div className="">
          <h3>Orderbekräftelse</h3>
          <p>Status: {props.latestOrder.status}</p>
          <p>Price: {props.latestOrder.price}</p>
          <p>Order ID: {props.latestOrder.uuid}</p>
          <p>Time: {props.latestOrder.timestamp}</p>
          <p>Antal Sallader: {props.latestOrder.order.length}</p>
        </div>
      </>
    );
  } else {
    return "";
  }
}

export default OrderConfirmation;
