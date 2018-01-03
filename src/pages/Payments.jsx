import React from "react";
import Payments from "../components/Payments";

const PaymentsPage = () => {
  return (
    <div className="page-inner">
      <div className="ui container text">
        <div className="ui inverted segment" style={{ textAlign: "center" }}>
          <Payments />
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;