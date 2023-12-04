import React, { useEffect } from "react";
import AdminPanelBar from "../../Components/Dashboard/Admin/AdminPanelBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./AdminPanelPages/Dashboard";
import TVCategory from "./AdminPanelPages/TvCategory";
import TVChannel from "./AdminPanelPages/TVChannel";
import AssignLiveTv from "./AdminPanelPages/AssignLiveTv";
import AdminSlider from "./AdminPanelPages/Slider";
import AdminHomeSlider from "./HomeSection";
import Users from "./AdminPanelPages/Users";
import SubAdmin from "./AdminPanelPages/SubAdmin";
import Transactions from "./AdminPanelPages/Transactions";
import EditCategory from "../../Components/Forms/EditCategory";
import EditLiveTv from "../../Components/Forms/EditLiveTv";
import EditAssignTv from "../../Components/Forms/EditAssignTv";
import EditSlider from "../../Components/Forms/EditSlider";
import EditHomeSection from "../../Components/Forms/EditHomeSection";
import EditUser from "../../Components/Forms/EditUser";
import EditSubAdmin from "../../Components/Forms/EditSubAdmin";
import UserHistory from "../../Components/UserHistory";
import Coupons from "./AdminPanelPages/Coupons";
import AddTvCategory from "../../Components/AddOn/AddTvCategory";
import AddChannel from "../../Components/AddOn/AddChannel";
import AddSection from "../../Components/AddOn/AddSection";
import AddSlider from "../../Components/AddOn/AddSlider";
import AddSubAdmin from "../../Components/AddOn/AddSubAdmin";
import AddCoupons from "../../Components/AddOn/AddCoupons";
import AddUser from "../../Components/AddOn/AddUser";
import EditCoupons from "../../Components/AddOn/EditCoupon";

function AdminPanelWrapper() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      if (data?.userType == "user") {
        navigate("/");
      }
    }
  }, []);
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
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route
          path="/Tv_category/edit_category/:id"
          element={<EditCategory />}
        />
        <Route path="/live_tv/edit_live_tv/:id" element={<EditLiveTv />} />
        <Route
          path="/assign_live_tv/assign_tv_edit"
          element={<EditAssignTv />}
        />
        <Route path="/slider/edit_slider" element={<EditSlider />} />
        <Route path="/home_sections/edit" element={<EditHomeSection />} />
        <Route path="/users/edit_user/:id" element={<EditUser />} />
        <Route path="/sub_admin/edit_user" element={<EditSubAdmin />} />
        <Route path="/users/history" element={<UserHistory />} />

        {/* Add Button Routes */}
        <Route path="/tv_category/add_category" element={<AddTvCategory />} />
        <Route path="/live_tv/add_live_tv" element={<AddChannel />} />
        <Route path="/home_sections/add" element={<AddSection />} />
        <Route path="/slider/add_slider" element={<AddSlider />} />
        <Route path="/sub_admin/add_user" element={<AddSubAdmin />} />
        <Route path="/coupons/addcoupon" element={<AddCoupons />} />
        <Route path="/coupons/editcoupon/:id" element={<EditCoupons />} />
        <Route path="/users/add_user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default AdminPanelWrapper;
