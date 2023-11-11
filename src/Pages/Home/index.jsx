import React from "react";
import MainSlider from "../../Components/MainSlider";
import SliderHeader from "../../Components/Common/SliderHeader";
import CardSlider from "../../Components/Common/CardSlider";

function Home() {
  return (
    <div>
      <MainSlider />
      <SliderHeader title="NFL Live" />
      <CardSlider />
      <SliderHeader title="NHL Live" />
      <CardSlider />
      <SliderHeader title="NBA Live" />
      <CardSlider />
      <SliderHeader title="MLB Live" />
      <CardSlider />
      <SliderHeader title="UFC Live" />
      <CardSlider />
    </div>
  );
}

export default Home;
