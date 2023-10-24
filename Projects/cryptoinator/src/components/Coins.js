import { SC } from "../config/SC";
import { SingleCoin } from "../config/api";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";

const Coins = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    fetchCoin();
  });

  const fetchCoin = async () => {
    // const { data } = await axios.get(SingleCoin(id));
    
   
  };
  return <div>C</div>;
};
 
export default Coins;
