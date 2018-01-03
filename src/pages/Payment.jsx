import React from "react";
import Payment from "../components/Payment";

const PaymentPage = () => {
  return (
    <div className="page-inner">
      <div className="ui container text">
        <div className="ui inverted segment" style={{ textAlign: "center" }}>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;