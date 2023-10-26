// import { useState } from "react";
import React from "react";


const Navbar = () => {
  // const [currency, setCurrency] = useState("INR");
  // const [symbol, setSymbol] = useState("₹");
  
  let currency = "INR"
  let symbol = "₹";
 
  return (
    <div>
      <div className="navbar dark:bg-base-100 bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <select
              className="select w-full max-w-xs"
              value={currency}
              symbol={symbol}
            >
              <option value={"USD"} symbol={"$"}>
                USD
              </option>
              <option value={"INR"} symbol={"₹"}>
                INR
              </option>
            </select>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/" className="btn btn-ghost normal-case text-xl text-white">
            Cryptoinator
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://source.unsplash.com/random/100×100/?bitcoin"
                  alt="User"
                />
              </div>
            </label>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
