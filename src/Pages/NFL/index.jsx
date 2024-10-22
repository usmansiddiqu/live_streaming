import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "../../Components/Common/Card";
import getEvents from "../../api/getEvents";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashHeader from "../../Components/Dashboard/DashHeader";
import { Helmet } from "react-helmet";

function NFL() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const { data: response } = await getEvents();
    setData(
      response.events.filter((card) => card.channel.TVCategory.name === "NFL")
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
    <>
      <Helmet>
        <title>
          Watch NFL Live | Stream Football Games in 4K on PixelSport TV
        </title>
        <meta
          name="description"
          content="Watch NFL games live in HD and 4K on PixelSport TV. Stream every touchdown, playoff, and Super Bowl moment in real-time."
        />
      </Helmet>
      <div
        style={{
          minHeight: "100%",
          overflow: "hidden !important",
        }}
      >
        <Nav />
        <DashHeader title={"NFL LIVE"} subtitle="NFL" />
        {loading ? (
          <div className="flex items-center justify-center relative pt-1 mt-3">
            <div className="w-[93%] md:w-[73%] mb-4">
              <Skeleton
                height={200}
                count={3}
                {...skeletonProps}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </div>
        ) : (
          <Card data={data} title={"NFL LIVE"} subtitle="NFL" />
        )}
      </div>
      <Footer />
    </>
  );
}

export default NFL;
