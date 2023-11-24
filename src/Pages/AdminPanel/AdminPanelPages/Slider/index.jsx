import React from "react";
import AdminSliderTable from "../../../../Components/AdminSliderTable";

function AdminSlider() {
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
      <AdminSliderTable />
    </div>
  );
}

export default AdminSlider;
