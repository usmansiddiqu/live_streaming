import React from "react";
import CardSlider from "../../Components/Common/CardSlider";
import SliderHeader from "../../Components/Common/SliderHeader";
import Navbar from "../../Components/Navbar";
import MainSlider from "../../Components/MainSlider";
import Nav from "../../Components/Navbar";
import Home from "../Home";
import Footer from "../../Components/Footer";

function MainScreen() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default MainScreen;
