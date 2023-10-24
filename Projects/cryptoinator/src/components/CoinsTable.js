import { CoinList } from "../config/api";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { CL } from "../config/CL";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
// import Coins from "./Coins";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CoinsTable = ({ state, price }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  price = "₹";

  // console.log(state);
  
  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await fetch(CoinList("INR"));
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      setCoins(CL);
    }
    
    
    setLoading(false);
  };

  // console.log(coins);
  useEffect(() => {
    fetchCoins();
  }, [state]);

  // to filter coins by search
  const handleSearch = () => {
    return coins.filter(
      (coin) => coin.name.toLowerCase().includes(search)
      // ||
      // coin.price.toLowerCase().includes(search)
    );
  };

  

  return (
    <div>
      <section className="mx-4 my-5 md:mx-10">
        {/* search start */}
        <form className="my-2">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        {/* search end */}

        {/* Start of Table Section */}

        {/* to show loading indicator */}
        {loading ? (
          <div>
            <progress className="progress w-full bg-white"></progress>
          </div>
        ) : (
          <div className="overflow-x-auto w-full text-sm ">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="!mx-0 !px-1 !w-1 md:!pl-4 md:!pr-52">Coin</th>
                  <th className="!mx-0 !px-1 z-1 md:!px-4">Price</th>
                  <th className="!mx-0 !px-1 md:!px-4">24h Change</th>
                  <th className="">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {/* slice method to use pagination and search filterd items with handlesearch*/}
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <tr key={row.name}>
                        <td className="!mx-0 !px-1 md:!pr-20 md:!pl-5">
                          <div className="flex items-center space-x-3 !w-28 md:!w-full">
                            <Link to={`/coins/${row.id}`}>
                              <div className="avatar">
                                <div className="mask mask-squircle w-8 h-12">
                                  <img
                                    src={row?.image}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                            </Link>

                            <Link to={`/coins/${row.id}`}>
                              <div className="">
                                <div className="font-bold uppercase">
                                  {row.symbol}
                                </div>
                                <div className="text-sm md:hidden opacity-50 w-2">
                                  {row.name.length > 5
                                    ? `${row.name.slice(0, 6)}..`
                                    : row.name}
                                </div>

                                <div className="text-sm opacity-50 w-2 hidden md:block">
                                  {row.name}
                                </div>
                              </div>
                            </Link>
                          </div>
                        </td>

                        <td
                          className="!mx-0 !px-1"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {price}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </td>
                        <td
                          className="!mx-0 !px-1"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        <th className="!mx-0 !px-1">
                          <span>
                            {price}
                            {numberWithCommas(
                              row.market_cap.toString().slice(0, -6)
                            )}{" "}
                            M
                          </span>
                        </th>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}

        {/* End of Table Section */}
      </section>
      {/* pagination component */}

      <div>
        <Pagination
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            textDecorationColor: "rgba(255, 255, 255,",
          }}
          className="bg-white h-10 !p-0"
          // classes={{ul: classes.pagination}}
          count={(handleSearch()?.length / 10).toFixed(0)}

          onChange={(_, value)=>{
            setPage(value)
            window.scroll(0,450)
          }}
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
};

export default CoinsTable;
