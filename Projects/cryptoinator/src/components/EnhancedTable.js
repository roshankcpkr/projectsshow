import React from "react";

const EnhancedTable = ({coinInfo}) => {
 

  return (
    <div className="mt-20 mb-10 mx-5">
      <div className="container p-2 mx-auto rounded-md sm:p-4 text-red-800 bg-red-100 shadow-xl">
        <h2 className="mb-3 text-2xl font-semibold leading-tight">Standings</h2>
        <div className="overflow-x-auto h-96">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg bg-red-300 ">
              <tr className="text-right">
                <th title="Ranking" className="p-3 text-left">
                  #
                </th>
                <th title="Coin name" className="p-3 text-left">
                  Coin
                </th>
                <th title="Symbol name" className="p-3 text-center">
                  Name
                </th>
                <th title="" className="p-3">
                  Price
                </th>
                <th title="Win percentage" className="p-3">
                  Price Change 1H
                </th>
                <th title="Games behind" className="p-3">
                  Price Change 1D
                </th>
                <th title="Home games" className="p-3">
                  Price Change 1W
                </th>
                <th title="Away games" className="p-3">
                  Price 1BTC
                </th>
              </tr>
            </thead>
            <tbody className="">
              {coinInfo.map((coin) => {
                return <tr className="text-right border-b border-opacity-20 border-red-300 bg-white" key={coin.id}>
                <td className="px-3 py-2 text-left">
                  <span>{coin.rank}</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <span>{coin.name}</span>
                </td>
                <td className="px-3 py-2 space-x-3 flex justify-center items-center">
                  <span>{coin.symbol}</span>
                  
                  <img src={coin.icon} className="w-5" alt="coin"/>
                </td>
                <td className="px-3 py-2">
                  <span>{coin.price}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{coin.priceChange1h}</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>{coin.priceChange1d}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{coin.priceChange1w}</span>
                </td>
                <td className="px-3 py-2">
                  <span>{coin.priceBtc}</span>
                </td>
              </tr>;
              })}
              {/* <tr className="text-right border-b border-opacity-20 border-red-300 bg-red-100">
                <td className="px-3 py-2 text-left">
                  <span>1</span>
                </td>
                <td className="px-3 py-2 text-left">
                  <span>MIA</span>
                </td>
                <td className="px-3 py-2 space-x-2">
                  <span>31</span>
                  <span>Icon</span>
                </td>
                <td className="px-3 py-2">
                  <span>17</span>
                </td>
                <td className="px-3 py-2">
                  <span>.646</span>
                </td>
                <td className="px-3 py-2 text-right">
                  <span>0</span>
                </td>
                <td className="px-3 py-2">
                  <span>17-5</span>
                </td>
                <td className="px-3 py-2">
                  <span>14-12</span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTable;
