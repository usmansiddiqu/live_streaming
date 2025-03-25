import React, { useEffect, useState } from "react";
import DashHeader from "../../Components/Dashboard/DashHeader";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import CardSliders from "../../Components/Common/CardSliders";
import getWishList from "../../api/wishList.api";
import SliderHeaders from "../../Components/Common/SliderHeaders";
function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [convertedData, setConvertedData] = useState([]);
  const getWishlists = async () => {
    try {
      const { data: response } = await getWishList();
      convertAndSetState(
        response.data?.filter((item) => item.eventId !== null)
      );

      return response.data;
    } catch (error) {}
  };
  const convertAndSetState = (originalData) => {
    const convertedArray = originalData.map((item) => ({
      _id: item.eventId._id,
      channel: item.eventId.channel,
      data: item.eventId,
      __v: item.eventId.__v,
      competitors1_alternateColor: item.eventId.competitors1_alternateColor,
      competitors1_color: item.eventId.competitors1_color,
      competitors1_displayName: item.eventId.competitors1_displayName,
      competitors1_homeAway: item.eventId.competitors1_homeAway,
      competitors1_logo: item.eventId.competitors1_logo,
      competitors1_name: item.eventId.competitors1_name,
      competitors1_score: item.eventId.competitors1_score,
      competitors2_alternateColor: item.eventId.competitors2_alternateColor,
      competitors2_color: item.eventId.competitors2_color,
      competitors2_displayName: item.eventId.competitors2_displayName,
      competitors2_homeAway: item.eventId.competitors2_homeAway,
      competitors2_logo: item.eventId.competitors2_logo,
      competitors2_name: item.eventId.competitors2_name,
      competitors2_score: item.eventId.competitors2_score,
      date: item.eventId.date,
      isAuto: true,
      location: item.eventId.location,
      match_name: item.eventId.match_name,
      shortName: item.eventId.shortName,
    }));
    setConvertedData([...convertedArray]);
  };
  useEffect(() => {
    getWishlists();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <DashHeader title="My Watchlist" SubTitle="My Watchlist" />

        <SliderHeaders title="NFL LIVE" />
        {convertedData?.filter((card) => card.channel.TVCategory.name == "NFL")
          .length && (
          <CardSliders
            data={convertedData.filter(
              (card) => card.channel.TVCategory.name == "NFL"
            )}
          />
        )}
        <SliderHeaders title="NHL LIVE" />
        {convertedData?.filter((card) => card.channel.TVCategory.name == "NHL")
          .length && (
          <CardSliders
            data={convertedData.filter(
              (card) => card.channel.TVCategory.name == "NHL"
            )}
          />
        )}

        <SliderHeaders title="NBA LIVE" />

        {convertedData?.filter((card) => card.channel.TVCategory.name == "NBA")
          .length && (
          <CardSliders
            data={convertedData.filter(
              (card) => card.channel.TVCategory.name == "NBA"
            )}
          />
        )}
        <SliderHeaders title="MLB LIVE" />
        {convertedData?.filter((card) => card.channel.TVCategory.name == "MLB")
          .length && (
          <CardSliders
            data={convertedData.filter(
              (card) => card.channel.TVCategory.name == "MLB"
            )}
          />
        )}

        {/* <h1 className="h-[8vh] w-[64vw] text-white text-2xl font-bold mx-auto flex items-center">
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
        </h1> */}

        <Footer />
      </div>
    </>
  );
}

export default WatchList;
