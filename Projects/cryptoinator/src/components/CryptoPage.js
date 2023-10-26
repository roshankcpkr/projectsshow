import React from "react";

import Banner from "./Banner/Banner";
import CoinsTable from "./CoinsTable";

const CryptoPage = () => {
  return (
    <>
      <div className="bg-[url(https://source.unsplash.com/random/100×100/?crypto)] bg-cover h-full">
        <Banner></Banner>
        <CoinsTable></CoinsTable>
      </div>
    </>
  );
};

export default CryptoPage;
