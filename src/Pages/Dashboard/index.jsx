import React, { useEffect, useState } from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Plans from "../../Components/Dashboard/Plans";
import Table from "../../Components/Dashboard/Table";
import PlanCards from "../../Components/Plans/PlanCards";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import getUserPayments from "../../api/getUserPayment";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const getData = async () => {
    const { data: response } = await getUserPayments();
    setUserData(response.data);
  };
  useEffect(() => {
    if (!localStorage.getItem("data") || !localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getData();
    }
  }, []);
  return (
    <>
      <Nav />
      <div>
        <DashHeader title="DashBoard" subtitle="DashBoard" />
        <Plans userData={userData} />
        <Table userData={userData} />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
