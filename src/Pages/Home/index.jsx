import React, { useEffect, useState } from "react";
import MainSlider from "../../Components/MainSlider";
import SliderHeader from "../../Components/Common/SliderHeader";
import CardSlider from "../../Components/Common/CardSlider";
import getEvents from "../../api/getEvents";
import Footer from "../../Components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const { data: response } = await getEvents();
    setData(response.events);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  // Skeleton color and animation customization
  const skeletonProps = {
    baseColor: "#170f2c", // Dark background color
    highlightColor: "#332e47", // Lighter highlight for the animation effect
  };

  return (
    <>
      <div className="relative" style={{ overflow: "hidden" }}>
        <div className="relative">
          <MainSlider />
          <div className="nfl-view">
            <SliderHeader title="MLB LIVE" link="mlb" />
          </div>

          {loading ? (
            <div className="flex items-center justify-center relative">
              <div className="w-[73%]">
                <Skeleton height={200} count={1} {...skeletonProps} />
              </div>
            </div>
          ) : (
            <CardSlider
              data={data.filter(
                (card) => card.channel.TVCategory.name === "MLB"
              )}
              type="MLB"
            />
          )}

          <SliderHeader title="NHL LIVE" link="nhl" />

          {loading ? (
            <div className="flex items-center justify-center relative">
              <div className="w-[73%]">
                <Skeleton height={200} count={1} {...skeletonProps} />
              </div>
            </div>
          ) : (
            <CardSlider
              data={data.filter(
                (card) => card.channel.TVCategory.name === "NHL"
              )}
              type="NHL"
            />
          )}

          <SliderHeader title="NBA LIVE" link="nba" />

          {loading ? (
            <div className="flex items-center justify-center relative">
              <div className="w-[73%]">
                <Skeleton height={200} count={1} {...skeletonProps} />
              </div>
            </div>
          ) : (
            <CardSlider
              data={data.filter(
                (card) => card.channel.TVCategory.name === "NBA"
              )}
              type="NBL"
            />
          )}
          <SliderHeader title="NFL LIVE" link="nfl" />
          {loading ? (
            <div className="flex items-center justify-center relative">
              <div className="w-[73%]">
                <Skeleton height={200} count={1} {...skeletonProps} />
              </div>
            </div>
          ) : data.filter((card) => card.channel.TVCategory.name === "NFL")
              ?.length ? (
            <>
              <CardSlider
                data={data.filter(
                  (card) => card.channel.TVCategory.name === "NFL"
                )}
                type="NFL"
              />
            </>
          ) : (
            <>
              <div className="h-[15.2vh] flex items-center">
                <CardSlider
                  data={data.filter(
                    (card) => card.channel.TVCategory.name === "NFL"
                  )}
                  type="NFL"
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-3 ">
        <Footer />
      </div>
    </>
  );
}

export default Home;
