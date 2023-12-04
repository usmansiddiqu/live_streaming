import React from "react";
import AdminCards from "../../../Components/Dashboard/Admin/AdminCards";
import BarChart from "../../../Components/Common/Graph";
import MyResponsiveBar from "../../../Components/Common/Graph";

function AdminDashboard() {
  return (
    <div
      style={{
        background: "black",
        position: "relative",
        left: "13%",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div>
        <AdminCards />
      </div>
    </div>
  );
}

export default AdminDashboard;
