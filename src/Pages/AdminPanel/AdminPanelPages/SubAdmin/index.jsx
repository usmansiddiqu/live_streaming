import React from "react";
import SubAdminTable from "../../../../Components/SubAdminTable";

function SubAdmin() {
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
      <SubAdminTable />
    </div>
  );
}

export default SubAdmin;
