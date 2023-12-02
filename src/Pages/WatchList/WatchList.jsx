import React from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function WatchList() {
  return (
    <>
      <Nav />
      <div>
        <DashHeader title="My Watchlist" SubTitle="My Watchlist" />
        <h1 className="h-[8vh] w-[64vw] text-white text-2xl font-bold mx-auto flex items-center">
          MLB
        </h1>
        <h1 className="h-[8vh] w-[64vw] text-white text-2xl font-bold mx-auto flex items-center">
          NBA
        </h1>
        <h1 className="h-[8vh] w-[64vw] text-white text-2xl font-bold mx-auto flex items-center">
          NFL
        </h1>
        <h1 className="h-[8vh] w-[64vw] text-white text-2xl font-bold mx-auto flex items-center">
          NHL
        </h1>
        <h1 className="h-[8vh] w-[64vw] text-white text-2xl font-bold mx-auto flex items-center">
          UFC
        </h1>

        <Footer />
      </div>
    </>
  );
}

export default WatchList;
