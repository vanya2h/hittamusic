import React from "react";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import { addItems } from "../actions/items";
import Switcher from "../components/Switcher";
import db from "../db.json"

const Index = ({ items }) => {
  return (
    <div className="page-inner">
      <Carousel items={items} />
      <Switcher />
    </div>
  );
};

const mapStateToProps = ({ items }) => ({
  items,
});

export default connect(mapStateToProps)(Index);