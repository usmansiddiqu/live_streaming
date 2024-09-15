import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "../../Components/Common/Card";
import getEvents from "../../api/getEvents";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashHeader from "../../Components/Dashboard/DashHeader";

function NHL() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const { data: response } = await getEvents();
    setData(
      response.events.filter((card) => card.channel.TVCategory.name === "NHL")
    );
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const skeletonProps = {
    baseColor: "#170f2c",
    highlightColor: "#332e47",
  };

  return (
    <>
      <div
        style={{
          minHeight: "100%",
          overflow: "hidden !important",
        }}
      >
        <Nav />
        <DashHeader title={"NHL LIVE"} subtitle="NHL" />
        {loading ? (
          <div className="flex items-center justify-center relative pt-2">
            <div className="w-[73%]">
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
