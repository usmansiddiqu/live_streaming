import React, { useEffect, useRef, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "../../Components/Common/Card";
import getEvents from "../../api/getEvents";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashHeader from "../../Components/Dashboard/DashHeader";
import { Helmet } from "react-helmet";

function NBA() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const topDivRef = useRef(null); // Create a reference for the top div
  const getData = async () => {
    setLoading(true);
    const { data: response } = await getEvents();
    setData(
      response.events.filter((card) => card.channel.TVCategory.name === "NBA")
    );
    setLoading(false);
  };

  useEffect(() => {
    const fetchDataAndScroll = async () => {
      await getData();
      if (topDivRef.current) {
        topDivRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll into view
      }
    };
    fetchDataAndScroll();
  }, []);

  const skeletonProps = {
    baseColor: "#170f2c", // Dark background color
    highlightColor: "#332e47", // Lighter highlight for the animation effect
  };

  return (
    <>
      <Helmet>
        <title>
          Watch NBA Live | Stream Basketball Games in 4K on PixelSport TV
        </title>
        <meta
          name="description"
          content="Stream NBA games live in HD and 4K on PixelSport TV. Watch every dunk, buzzer-beater, and playoff moment from the regular season to the Finals."
        />
      </Helmet>
      <div ref={topDivRef}>
        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            overflow: "hidden !important",
          }}
        >
          <Nav />
          <DashHeader title={"NBA LIVE"} subtitle="NBA" />
          {loading ? (
            <div className="flex items-center justify-center relative pt-1 mt-3">
              <div className="w-[93%] skeleton-loading mb-4">
                <Skeleton
                  height={200}
                  count={3}
                  {...skeletonProps}
                  style={{ marginBottom: "20px" }}
                />
              </div>
            </div>
          ) : (
            <Card data={data} title={"NBA LIVE"} subtitle="NBA" />
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default NBA;
