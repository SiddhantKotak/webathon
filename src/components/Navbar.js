import React, { useState } from "react";
import photo from "../logo.png";

const Navbar = (props) => {
  return (
    <div className="w-full h-[120px] bg-black bg-opacity-[0.7] shadow-[50px] text-red-600 flex justify-center items-center">
      <div className="absolute left-[200px]">
        <img src={photo} alt="Logo" className="h-[400x] w-[100px] z-10"></img>
      </div>
      <div className="flex gap-x-8">
        <div
          className="flex flex-col"
          onClick={() => {
            props.setOrders(props.currentOrder);
            props.setisCurrent(true); // Set orders to props.od (Current Orders)
          }}
        >
          <p className="font-extrabold text-2xl cursor-pointer font-serif">
            Current Orders
          </p>
          {props.isCurrent && (
            <p className="w-[60px] h-1 bg-red-500 mx-auto mt-1"></p>
          )}
        </div>

        <div className="flex flex-col">
          <p
            className="font-extrabold text-2xl cursor-pointer font-serif"
            onClick={() => {
              props.setOrders(props.waitingOrder);
              props.setisCurrent(false); // Set orders to props.od (Current Orders)
            }}
          >
            Waiting Orders
          </p>
          {!props.isCurrent && (
            <p className="w-[60px] h-1 bg-red-500 mx-auto mt-1"></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
