import React from "react";
import AdminCards from "../../../Components/Dashboard/Admin/AdminCards";

function AdminDashboard() {
  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        left: "13%",
        width: "85vw",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <AdminCards />
    </div>
  );
}

export default AdminDashboard;
