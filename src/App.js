import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { Route } from "react-router-dom";
import Payment from "./components/Payment";

function App() {
  useEffect(() => {
    getCurrentOrder();
    getWaitingOrder();
  }, []);
  const [display, setDisplay] = useState(false);
  const [currentOrder, setCurrentOrder] = useState();
  const [waitingOrder, setWaitingOrder] = useState();

  const [orders, setOrders] = useState([]);
  const [isCurrent, setisCurrent] = useState(true);

  async function getCurrentOrder() {
    const resp = await fetch("/api/v1/getCurrent", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });

    const temp = await resp.json();
    console.log(temp.data);
    setCurrentOrder(temp.data);
    setOrders(temp.data);
    // Your handleDispatch function code...
  }

  async function getWaitingOrder() {
    const resp = await fetch("/api/v1/getWaiting", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    });

    const temp = await resp.json();
    console.log(temp.data);
    setWaitingOrder(temp.data);
    setDisplay(true);
    // Your handleDispatch function code...
  }

  // Your getWaitingOrder function code...

  return (
    <div className="main">
      {
        /* <Navbar
        currentOrder={currentOrder}
        waitingOrder={waitingOrder}
        setOrders={setOrders}
        setisCurrent={setisCurrent}
        isCurrent={isCurrent}
      />
      {display && (
        <Section
          order={orders}
          isCurrent={isCurrent}
          
          
        /> */
        <Payment></Payment>
      }
    </div>
  );
}

export default App;
