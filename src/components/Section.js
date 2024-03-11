import React from "react";
import Cards from "./Cards";

const Section = ({
  order,
  isCurrent,
  //   setOrders,
  //   setCurrentOrder,
  //   setWaitingOrder,
  //   getWaitingOrder,
  //   getCurrentOrder,
}) => {
  console.log(order);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center justify-around items-center mt-4 w-11/12 overflow-hidden">
      {order.map((element, index) => (
        <Cards
          details={element}
          key={index}
          order={order}
          isCurrrent={isCurrent}
          //   setOrders={setOrders}
          //   setWaitingOrder={setWaitingOrder}
          //   setCurrentOrder={setCurrentOrder}
          //   getWaitingOrder={getWaitingOrder}
          //   getCurrentOrder={getCurrentOrder}
        />
      ))}
    </div>
  );
};

export default Section;
