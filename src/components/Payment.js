import React from "react";
import photo from "../Paytm_QRcode.png";

const Payment = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex justify-center items-center flex-col overflow-hidden">
      <div>
        <img src={photo} className="w-[500px] h-[900px]"></img>
        <p className="text-2xl mt-3"></p>
      </div>
    </div>
  );
};

export default Payment;
