import React from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Plans from "../../Components/Dashboard/Plans";
import Table from "../../Components/Dashboard/Table";
import PlanCards from "../../Components/Plans/PlanCards";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import VideoPlayer from "../../Components/Common/VideoPlayer";

function Dashboard() {
  const videoUrl = "https://247c.mrgamingstreams.com/mrgamingnhlnet.m3u8";

  return (
    <>
      <Nav />
      <div>
        <DashHeader title="DashBoard" SubTitle="DashBoard" />
        <VideoPlayer url={videoUrl} />
        <Plans />
        <Table />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
