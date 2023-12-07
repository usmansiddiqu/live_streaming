import React, { useEffect, useState } from "react";
import MainSlider from "../../Components/MainSlider";
import SliderHeader from "../../Components/Common/SliderHeader";
import CardSlider from "../../Components/Common/CardSlider";
import { getEvents } from "../../api/event.api";

function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data: response } = await getEvents();
    setData(response.events);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-[#130A2D]">
      <MainSlider />
      <SliderHeader title="NFL Live" />
      <CardSlider
        data={data.filter((card) => card.channel.TVCategory.name == "NFL")}
      />
      <SliderHeader title="NHL Live" />
      <CardSlider
        data={data.filter((card) => card.channel.TVCategory.name == "NHL")}
      />
      <SliderHeader title="NBA Live" />
      <CardSlider
        data={data.filter((card) => card.channel.TVCategory.name == "NBA")}
      />
      <SliderHeader title="MLB Live" />
      <CardSlider
        data={data.filter((card) => card.channel.TVCategory.name == "MLB")}
      />
    </div>
  );
}

export default Home;
