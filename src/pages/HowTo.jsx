import React from "react";
import Carousel from "../components/Carousel";
import HowTo from "../components/HowTo";
import db from "../db.json";

const HowToPage = () => {
  return (
    <div className="page-inner">
      <div className="ui container text">
        <div className="ui inverted segment" style={{ textAlign: "left" }}>
          <HowTo />
        </div>
      </div>
    </div>
  );
};

export default HowToPage;