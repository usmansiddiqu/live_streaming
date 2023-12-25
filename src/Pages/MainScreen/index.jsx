import React from "react";
import Nav from "../../Components/Navbar";
import Home from "../Home";
import Footer from "../../Components/Footer";

function MainScreen() {
  return (
    <>
      <div className="forMobScreen">
        <Nav />
        <Home />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default MainScreen;
