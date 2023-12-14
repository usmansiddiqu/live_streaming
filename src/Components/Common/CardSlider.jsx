import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.scss";
import TeamIcons from "./TeamIcons";
import { useNavigate } from "react-router-dom";
import Ended from "./Ended";
import { useMediaQuery } from "react-responsive";

const CardSlider = ({ data }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1001px)" });
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: 20,
    drag: true,
  };
  const navigate = useNavigate();
  return (
    <>
      {isDekstop && (
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
          <div className=" ml-1">
            <Splide options={{ ...splideOptions, width: 1400 }}>
              <>
                {data
                  ?.sort(
                    (a, b) => new Date(b?.data?.date) - new Date(a?.data?.date)
                  )
                  .map((item) => (
                    <SplideSlide
                      options={{ ...splideOptions, width: 150 }}
                      onClick={() =>
                        navigate(
                          `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                        )
                      }
                      className="cardSlider flex flex-col items-center cursor-pointer"
                      key={item.id}
                      style={{
                        border: "1px solid white",
                        width: "100%;",
                        height: "100vh",
                        background: `linear-gradient(-60deg, #${
                          item.data.competitors.filter(
                            (comp) => comp.homeAway == "home"
                          )[0].color
                        } 50%, #${
                          item.data.competitors.filter(
                            (comp) => comp.homeAway != "home"
                          )[0].alternateColor
                        } 50%)`,
                      }}
                    >
                      <div className="placeAndTime border w-[100%] h-[auto] p-1  flex justify-between flex-row  bg-[black] bg-opacity-40">
                        {console.log(item)}
                        <p className="text-white text-sm">
                          {truncateText(item.data.location, 20)}
                        </p>
                        <p className="text-white text-sm">
                          {truncateText(item.data.date.split("T")[0], 10)}
                        </p>
                      </div>

                      <div className="container" style={{ marginTop: "25px" }}>
                        <TeamIcons
                          iconsData={item.data.competitors.map((comp) => ({
                            iconUrl: comp.logo,
                            name: comp.name,
                          }))}
                        />
                        <Ended
                          show={
                            new Date(item?.data?.date) >
                            new Date().setHours(new Date().getHours() + 4)
                          }
                        />
                      </div>
                    </SplideSlide>
                  ))}
              </>
            </Splide>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div
          className="Cardsliderr"
          style={{
            height: "AUTO",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className=" ml-1">
            <Splide options={{ ...splideOptions, width: 1400 }}>
              <>
                {data
                  ?.sort(
                    (a, b) => new Date(b?.data?.date) - new Date(a?.data?.date)
                  )
                  .map((item) => (
                    <SplideSlide
                      options={{ ...splideOptions, width: 150 }}
                      onClick={() =>
                        navigate(
                          `/${item?.channel?.TVCategory?.name}/live/${item._id}`
                        )
                      }
                      className="cardSliderr flex flex-col items-center cursor-pointer"
                      key={item.id}
                      style={{
                        border: "1px solid white",
                        width: "100%;",
                        height: "100vh",
                        background: `linear-gradient(-60deg, #${
                          item.data.competitors.filter(
                            (comp) => comp.homeAway == "home"
                          )[0].color
                        } 50%, #${
                          item.data.competitors.filter(
                            (comp) => comp.homeAway != "home"
                          )[0].alternateColor
                        } 50%)`,
                      }}
                    >
                      <div className="placeAndTime border w-[100%] h-[auto] p-1  flex justify-between flex-row  bg-[black] bg-opacity-40">
                        {console.log(item)}
                        <p className="text-white text-sm">
                          {truncateText(item.data.location, 5)}
                        </p>
                        <p className="text-white text-sm">
                          {truncateText(item.data.date.split("T")[0], 10)}
                        </p>
                      </div>

                      <div className="container" style={{ marginTop: "25px" }}>
                        <TeamIcons
                          iconsData={item.data.competitors.map((comp) => ({
                            iconUrl: comp.logo,
                            name: comp.name,
                          }))}
                        />
                        <Ended
                          show={
                            new Date(item?.data?.date) >
                            new Date().setHours(new Date().getHours() + 4)
                          }
                        />
                      </div>
                    </SplideSlide>
                  ))}
              </>
            </Splide>
          </div>
        </div>
      )}
    </>
  );
};

export default CardSlider;
