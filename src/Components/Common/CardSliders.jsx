import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.scss";
import TeamIcons from "./TeamIcons";
import { useNavigate } from "react-router-dom";

const CardSliders = ({ data }) => {
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: 20,
    drag: true,
  };
  const navigate = useNavigate();
  return (
    <div
      className="Cardslider "
      style={{
        width: "73%",
        height: "AUTO",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "25px",
      }}
    >
      <Splide options={{ ...splideOptions, width: 1400 }}>
        <>
          {data?.map((item) => (
            <SplideSlide
              options={{ ...splideOptions, width: 150 }}
              onClick={() =>
                navigate(`/${item?.channel?.TVCategory?.name}/live/${item._id}`)
              }
              className={`cardSlider flex flex-col items-center cursor-pointer`}
              key={item.id}
              style={{
                border: "1px solid white",
                width: "100%;",
                height: "100vh",
                background: `linear-gradient(-60deg, #${
                  item.competitors1_color === "ffffff"
                    ? "808080"
                    : item.competitors1_color
                } 50%, #${
                  item.competitors1_alternateColor === "ffffff"
                    ? "808080"
                    : item.competitors1_alternateColor
                } 50%)`,
              }}
            >
              {console.log(item)}
              <div
                className="placeAndTime border w-[100%] h-[3vh] flex justify-between flex-row  bg-[black] bg-opacity-40"
                style={{
                  padding: "0 10px",
                }}
              >
                <p className="text-white text-sm">{item?.location}</p>
                <p className="text-white text-sm">{item?.date.split("T")[0]}</p>
              </div>

              <div className="container" style={{ marginTop: "25px" }}>
                <TeamIcons
                  iconsData={[
                    {
                      iconUrl: item.competitors1_logo,
                      name: item.competitors1_displayName,
                    },
                    {
                      iconUrl: item.competitors2_logo,
                      name: item.competitors2_displayName,
                    },
                  ]}
                />
              </div>
            </SplideSlide>
          ))}
        </>
      </Splide>
    </div>
  );
};

export default CardSliders;
