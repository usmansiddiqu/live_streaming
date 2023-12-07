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
      convertAndSetState(response.data);

      return response.data;
    } catch (error) {}
  };
  const convertAndSetState = (originalData) => {
    const convertedArray = originalData.map((item) => ({
      _id: item.eventId._id,
      channel: item.eventId.channel,
      data: item.eventId.data,
      __v: item.eventId.__v,
    }));
    setConvertedData([...convertedArray]);
    console.log(convertedArray);
  };
  useEffect(() => {
    getWishlists();
  }, []);

  return (
    <>
      <Nav />
      <div>
        <DashHeader title="My Watchlist" SubTitle="My Watchlist" />

        <SliderHeaders title="NFL Live" />
        {convertedData?.filter((card) => card.channel.TVCategory.name == "NFL")
          .length && (
          <CardSliders
            data={convertedData.filter(
              (card) => card.channel.TVCategory.name == "NFL"
            )}
          />
        )}
        <SliderHeaders title="NHL Live" />
        {convertedData?.filter((card) => card.channel.TVCategory.name == "NHL")
          .length && (
          <CardSliders
            data={convertedData.filter(
              (card) => card.channel.TVCategory.name == "NHL"
            )}
          />
        )}

        <SliderHeaders title="NBA Live" />
        {convertedData?.filter((card) => card.channel.TVCategory.name == "NBA")
          .length && (
          <CardSliders
            data={convertedData.filter(
              (card) => card.channel.TVCategory.name == "NBA"
            )}
          />
        )}
        <SliderHeaders title="MLB Live" />
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
