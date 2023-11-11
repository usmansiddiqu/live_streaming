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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />}></Route>
          <Route path="/MLB" element={<MLB />}></Route>
          <Route path="/NBA" element={<NBA />}></Route>
          <Route path="/NFL" element={<NFL />}></Route>
          <Route path="/NHL" element={<NHL />}></Route>
          <Route path="/UFC" element={<UFC />}></Route>
          <Route path="/LOGIN" element={<Login />}></Route>
          <Route path="/SIGNUP" element={<Signup />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
