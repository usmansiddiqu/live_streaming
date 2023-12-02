import "./App.css";
import MLB from "./Pages/MLB";
import MainScreen from "./Pages/MainScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UFC from "./Pages/UFC";
import NHL from "./Pages/NHL";
import NFL from "./Pages/NFL";
import NBA from "./Pages/NBA";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
// import Dashboard from "./Pages/Dashboard";
import Plans from "./Pages/Plans/PlansPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import AdminPanel from "./Pages/AdminPanel";
import AdminPanelWrapper from "./Pages/AdminPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/MLB" element={<MLB />} />
          <Route path="/NBA" element={<NBA />} />
          <Route path="/NFL" element={<NFL />} />
          <Route path="/NHL" element={<NHL />} />
          <Route path="/UFC" element={<UFC />} />
          <Route path="/LOGIN" element={<Login />} />
          <Route path="/SIGNUP" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<AdminPanel />} />
          <Route path="/admin/*" element={<AdminPanelWrapper />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/detailpage" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
