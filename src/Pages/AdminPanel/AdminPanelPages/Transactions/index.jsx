import React from "react";
import TransactionTable from "../../../../Components/TransactionTable";

function Transactions() {
  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        left: "14%",
        width: "85vw",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <TransactionTable />
    </div>
  );
}

export default Transactions;
