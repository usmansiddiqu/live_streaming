import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "../../Components/Common/Card";
import getEvents from "../../api/getEvents";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashHeader from "../../Components/Dashboard/DashHeader";

function NBA() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const { data: response } = await getEvents();
    setData(
      response.events.filter((card) => card.channel.TVCategory.name === "NBA")
    );
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const skeletonProps = {
    baseColor: "#170f2c", // Dark background color
    highlightColor: "#332e47", // Lighter highlight for the animation effect
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden !important",
        }}
      >
        <Nav />
        <DashHeader title={"MLB LIVE"} subtitle="MLB" />
        {loading ? (
          <div className="flex items-center justify-center relative pt-2">
            <div className="w-[73%]">
              <Skeleton height={200} count={3} {...skeletonProps} />
            </div>
          </div>
        ) : (
          <Card data={data} title={"NBA LIVE"} subtitle="NBA" />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default NBA;
