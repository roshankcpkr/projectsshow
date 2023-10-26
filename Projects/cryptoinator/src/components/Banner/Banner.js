import React from "react";
// import Carousel from "./Carousel";
const Banner = () => {
  return (
    <div className="h-40  bg-blend-soft-light flex flex-col pt-10 justify-around">
      <div className="p-2">
        <h2 className="font-bold mb-5 font-mono text-white text-2xl md:text-6xl">
          CryptoInator
        </h2>
        <h2 className="text-white">Step in to the cryptocurrency world</h2>
        {/* <div className="mt-10">
          <Carousel ></Carousel>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
