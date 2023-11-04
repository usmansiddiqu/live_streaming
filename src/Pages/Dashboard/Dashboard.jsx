import React from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Plans from "../../Components/Dashboard/Plans";
import Table from "../../Components/Dashboard/Table";

function Dashboard() {
  return (
    <div>
      <DashHeader />
      <Plans />
      <Table />
    </div>
  );
}

export default Dashboard;
