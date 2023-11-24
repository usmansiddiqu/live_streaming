import React from "react";
import AdminPanelBar from "../../Components/Dashboard/Admin/AdminPanelBar";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminPanelPages/Dashboard";
import TVCategory from "./AdminPanelPages/TvCategory";
import TVChannel from "./AdminPanelPages/TVChannel";
import AssignLiveTv from "./AdminPanelPages/AssignLiveTv";
import AdminSlider from "./AdminPanelPages/Slider";
import AdminHomeSlider from "./HomeSection";
import Users from "./AdminPanelPages/Users";
import SubAdmin from "./AdminPanelPages/SubAdmin";
import Transactions from "./AdminPanelPages/Transactions";

function AdminPanelWrapper() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <AdminPanelBar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/Tv_category" element={<TVCategory />} />
        <Route path="/live_tv" element={<TVChannel />} />
        <Route path="/assign_live_tv" element={<AssignLiveTv />} />
        <Route path="/slider" element={<AdminSlider />} />
        <Route path="/home_section" element={<AdminHomeSlider />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sub_admin" element={<SubAdmin />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default AdminPanelWrapper;
