import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.scss";
import TeamIcons from "./TeamIcons";

function CardSlider({ data }) {
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: 20,
    drag: true,
  };
  return (
    <div
      className="Cardslider"
      style={{
        width: "73%",
        height: "AUTO",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "25px",
      }}
    >
      {console.log(data)}
      <Splide options={{ ...splideOptions, width: 1400 }}>
        <>
          {data.map((item) => (
            <SplideSlide
              options={{ ...splideOptions, width: 150 }}
              className="cardSlider bg-red-600 flex flex-col items-center "
              key={item.id}
              style={{
                border: "1px solid white",
              }}
            >
              <div
                className="placeAndTime border w-[100%] h-[3vh] flex justify-between flex-row  bg-[black] bg-opacity-40"
                style={{
                  padding: "0 10px",
                }}
              >
                <p className="text-white text-sm">{item.data.location}</p>
                <p className="text-white text-sm">
                  {item.data.date.split("T")[0]}
                </p>
              </div>

              <div className="container" style={{ marginTop: "25px" }}>
                <TeamIcons
                  iconsData={item.data.competitors.map((comp) => ({
                    iconUrl: comp.logo,
                    name: comp.name,
                  }))}
                />
              </div>
            </SplideSlide>
          ))}
        </>
      </Splide>
    </div>
  );
}

export default CardSlider;
