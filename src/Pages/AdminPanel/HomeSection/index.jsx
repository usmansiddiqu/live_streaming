import React from "react";
import HomeSectionTable from "../../../Components/HomeSectionTable";

function AdminHomeSlider() {
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
      <HomeSectionTable />
    </div>
  );
}

export default AdminHomeSlider;
