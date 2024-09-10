import React from "react";
import MainSlider from "../../Components/MainSlider";
import SliderHeader from "../../Components/Common/SliderHeader";
import CardSlider from "../../Components/Common/CardSlider";
import Footer from "../../Components/Footer";
import { useEventsQuery } from "../../api/services/liveTV";
import Skeleton from "react-loading-skeleton";

function Home() {
  const { data, isLoading } = useEventsQuery();

  if (isLoading)
    return (
      <>
        <Skeleton />
      </>
    );
  return (
    <>
      <div className=" relative" style={{ overflow: "hidden" }}>
        <div className="relative">
          <MainSlider />
          <div className="nfl-view">
            <SliderHeader title="MLB Live" link="mlb" />
          </div>
          <CardSlider
            data={data.events.filter(
              (card) => card.channel.TVCategory.name == "MLB"
            )}
            type="MLB"
            isLoading={isLoading}
          />
          <SliderHeader title="NHL Live" link="nhl" />
          <CardSlider
            data={data.events.filter(
              (card) => card.channel.TVCategory.name == "NHL"
            )}
            type="NHL"
            isLoading={isLoading}
          />
          <SliderHeader title="NBA Live" link="nba" />
          <CardSlider
            data={data.events.filter(
              (card) => card.channel.TVCategory.name == "NBA"
            )}
            type="NBL"
            isLoading={isLoading}
          />
          {data.events.filter((card) => {
            return card.channel.TVCategory.name == "NFL";
          })?.length ? (
            <>
              <SliderHeader title="NFL Live" link="nfl" />
              <CardSlider
                data={data.events.filter((card) => {
                  return card.channel.TVCategory.name == "NFL";
                })}
                type="NFL"
                isLoading={isLoading}
              />
            </>
          ) : (
            <>
              <SliderHeader title="NFL Live" link="nfl" />
              <div className="h-[15.2vh] flex items-center">
                <CardSlider
                  data={data.filter((card) => {
                    return card.channel.TVCategory.name == "NFL";
                  })}
                  type="NFL"
                  isLoading={isLoading}
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
