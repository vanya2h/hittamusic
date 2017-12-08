import React from "react";
import Carousel from "../components/Carousel";
import Basket from "../components/Basket";
import db from "../db.json";

const BasketPage = () => {
  return (
    <div className="page-inner">
        <div className="ui container text">
          <h1 className="header ui inverted">Your Basket</h1>
          <div className="ui inverted segment" style={{textAlign: "left"}}>
            <Basket />
          </div>
        </div>
    </div>
  );
};

export default BasketPage;