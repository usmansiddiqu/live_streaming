import "./App.css";
import MLB from "./Pages/MLB";
import MainScreen from "./Pages/MainScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UFC from "./Pages/UFC";
import NHL from "./Pages/NHL";
import NFL from "./Pages/NFL";
import NBA from "./Pages/NBA";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Plans from "./Pages/Plans/PlansPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import AdminPanel from "./Pages/AdminPanel";
import AdminPanelWrapper from "./Pages/AdminPanel";
import { useState } from "react";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import WatchList from "./Pages/WatchList/WatchList";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isLoggedIn] = useState(true);
  const [isAdmin] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/mlb" element={<MLB />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/nfl" element={<NFL />} />
          <Route path="/nhl" element={<NHL />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/membership_plan" element={<Plans />} />
          <Route path="/watchlist" element={<WatchList />} />
          {isLoggedIn && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/:type/live/:id" element={<DetailsPage />} />
              <Route path="/membership_plan/:id" element={<Plans />} />

              {isAdmin && (
                <>
                  <Route path="/admin/*" element={<AdminPanelWrapper />} />
                </>
              )}
            </>
          )}

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
