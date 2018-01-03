import React from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div className="page-inner">
      <div className="ui container text">
        <div className="ui inverted segment" style={{ textAlign: "left" }}>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CartPage;