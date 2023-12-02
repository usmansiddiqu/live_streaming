import React from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Plans from "../../Components/Dashboard/Plans";
import Table from "../../Components/Dashboard/Table";
import PlanCards from "../../Components/Plans/PlanCards";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Dashboard() {
  return (
    <>
      <Nav />
      <div>
        <DashHeader title="DashBoard" SubTitle="DashBoard" />
        <Plans />
        <Table />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
