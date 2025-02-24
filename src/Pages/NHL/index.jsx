import React, { useEffect, useRef, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "../../Components/Common/Card";
import getEvents from "../../api/getEvents";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashHeader from "../../Components/Dashboard/DashHeader";
import { Helmet } from "react-helmet";

function NHL() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const topDivRef = useRef(null);
  const getData = async () => {
    setLoading(true);
    const { data: response } = await getEvents();
    setData(
      response.events.filter((card) => card.channel.TVCategory.name === "NHL")
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
    baseColor: "#170f2c",
    highlightColor: "#332e47",
  };

  return (
    <>
      <Helmet>
        <title>
          Watch NHL Live | Stream Hockey Games in 4K on PixelSport TV
        </title>
        <meta
          name="description"
          content="Stream NHL hockey games live in HD and 4K on PixelSport TV. Watch your favorite teams hit the ice and catch every goal and power play."
        />
      </Helmet>
      <div
        style={{
          minHeight: "100%",
          overflow: "hidden !important",
        }}
        ref={topDivRef}
      >
        <Nav />
        <DashHeader title={"NHL LIVE"} subtitle="NHL" />
        {loading ? (
          <div className="flex items-center justify-center relative pt-1 mt-3">
            <div className="card-con w-full md:w-3/4 lg:w-2/3 mb-4 card-con-mbl">
              <Skeleton
                height={200}
                count={3}
                {...skeletonProps}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </div>
        ) : (
          <Card data={data} title={"NHL LIVE"} subtitle="NHL" />
        )}
      </div>
      <Footer />
    </>
  );
}

export default NHL;
