import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Section = ({ details, isCurrrent, order }) => {
  const [refreshInterval, setRefreshInterval] = useState(null);

  console.log(details);

  const ordersString = details.orders.join(", ");

  function clickHandler(temp) {
    const newOrder = order.filter((ord) => ord.table !== temp);
    console.log(newOrder);
    removeCurrent(temp, newOrder);
  }

  async function removeCurrent(temp, newOrder) {
    let res = await fetch("/api/v1/removeCurrent", {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ table: temp }),
    });
    console.log(res);

    let resp = await fetch("/api/v1/removeWait", {
      method: "delete",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (resp.status === 406 || resp === undefined) {
      return;
    }

    console.log("asdfghjkl;");
    console.log(resp.table);
    console.log(resp.bill);
    console.log(resp.orders);
    resp = await resp.json();
    console.log(resp);

    const add = await fetch("/api/v1/addOrder", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        table: resp.data.table,
        bill: resp.data.bill,
        orders: resp.data.orders,
      }),
    });

    // updateDb();
  }

  const navigate = useNavigate(); // Move useNavigate to the top level

  useEffect(() => {
    // Start auto-refreshing
    const intervalId = setInterval(() => {
      // Perform your data-fetching logic here
      // For example:
      // fetchData();
    }, 5000); // Refresh every 5 seconds

    setRefreshInterval(intervalId);

    // Clean up function to clear interval when component unmounts
    return () => {
      clearInterval(refreshInterval);
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  return (
    <div className="w-1/2  flex flex-col justify-center items-center bg-white opacity-[0.7] rounded-xl  font-extrabold text-black-400 text-[20px] mt-4 shadow-xl h-auto py-4">
      <p className="text-left">Table Number: {details.table}</p>
      <p className="px-2">Order: {ordersString}</p>{" "}
      {/* Display the joined string */}
      <p>Bill: {details.bill} </p>
      {isCurrrent && (
        <button
          className="bg-black text-white w-[120px] rounded-xl mt-2 flex justify-center items-center"
          onClick={() => {
            clickHandler(details.table);
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Section;
