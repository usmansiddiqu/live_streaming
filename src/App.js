import "./App.css";
import MLB from "./Pages/MLB";
import MainScreen from "./Pages/MainScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NHL from "./Pages/NHL";
import NFL from "./Pages/NFL";
import NBA from "./Pages/NBA";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup";
import EmailVerif from "./Pages/EmailVerif";
import Profile from "./Pages/Profile";
import Plans from "./Pages/Plans/PlansPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import BannerPage from "./Pages/DetailsPage/BannerPage";
import AdminPanel from "./Pages/AdminPanel";
import AdminPanelWrapper from "./Pages/AdminPanel";
import React, { useState } from "react";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import WatchList from "./Pages/WatchList/WatchList";
import "react-toastify/dist/ReactToastify.css";
import AboutUS from "./Pages/AboutUS";
import TermOfUse from "./Pages/TermOfUse";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQ from "./Pages/FAQ";
import Email from "./Pages/EnterEmail";
import ForgetPassword from "./Pages/ForgetPassword";
import Contact from "./Pages/Contact";
import CrispChat from "./Components/crisp";
import Footer from "./Components/Footer";
// import NameLiveChat from "./Components/NameLiveChat";
import TestingChat from "./Components/TestingChat";

function App() {
  const [isLoggedIn] = useState(true);
  const [isAdmin] = useState(
    JSON.parse(localStorage.getItem("data"))?.usertype == "admin"
  );

  return (
    <div className="App">
      <CrispChat />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/mlb" element={<MLB />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/nfl" element={<NFL />} />
          <Route path="/nhl" element={<NHL />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verifyemail" element={<EmailVerif />} />

          <Route path="/membership_plan" element={<Plans />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/terms-of-use" element={<TermOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/enterEmail" element={<Email />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          {/* <Route path="/contact-us" element={<Contact />} /> */}

          {isLoggedIn && (
            <React.Fragment>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/live/:id" element={<BannerPage />} />
              <Route path="/:type/live/:id" element={<DetailsPage />} />
              <Route path="/membership_plan/:id" element={<Plans />} />
              <Route
                path="/livechat_pixel_TV_Sports"
                element={<TestingChat />}
              />
              {isAdmin && (
                <React.Fragment>
                  <Route path="/admin/*" element={<AdminPanelWrapper />} />
                </React.Fragment>
              )}
            </React.Fragment>
          )}

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
