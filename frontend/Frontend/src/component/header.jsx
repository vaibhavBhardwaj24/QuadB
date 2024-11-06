import React, { useState } from "react";

const Header = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="w-screen p-4 justify-between flex">
      <h1 className="w- h-10 text-6xl tracking-widest text-teal-300 ">
        HOLDINFO
      </h1>
      <div className="flex gap-4">
        <select
          name="INR"
          id=""
          className="px-2 bg-gray-500 font-bold rounded-xl text-white"
        >
          <option>INR</option>
        </select>
        <select
          name="BTC"
          id=""
          className="p-2 bg-gray-500 font-bold rounded-xl text-white"
        >
          <option>BTC</option>
        </select>
        <button className="p-2 bg-gray-500 font-bold rounded-xl text-nowrap text-white">
          BUY BTC
        </button>
      </div>
      <div className="flex gap-2">
        <button className="bg-teal-300 text-white font-bold text-nowrap p-2 rounded-xl">
          Connect Telegram
        </button>
        <div
          className={`flex items-center w-16 h-8 p-1 cursor-pointer rounded-full transition-colors duration-300 ${
            isOn ? "bg-teal-500" : "bg-gray-300"
          }`}
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-8" : "translate-x-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
