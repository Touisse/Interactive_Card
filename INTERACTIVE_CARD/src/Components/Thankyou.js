import React from "react";
import tick from "../Assets/icon-complete.svg";

const Thankyou = ({ setConfirmed }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-w-lg mx-auto">
      <img src={tick} alt="" className="block mx-auto" />
      <h1 className="text-slate-800 text-3xl my-6 uppercase">Thank You</h1>
      <p className="text-slate-400 text-center">
        We've added your card details
      </p>
      <button
        className="btn block mx-auto mt-10 w-full"
        onClick={() => setConfirmed(false)}
      >
        Continue
      </button>
    </div>
  );
};

export default Thankyou;
