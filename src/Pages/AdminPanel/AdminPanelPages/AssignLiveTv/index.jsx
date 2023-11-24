import React from "react";
import AssignLiveTvTable from "../../../../Components/AssignLiveTvTable";

function AssignLiveTv() {
  return (
    <>
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
        <AssignLiveTvTable />
      </div>
    </>
  );
}

export default AssignLiveTv;
