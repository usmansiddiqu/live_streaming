import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../Assets/styles/CardSlider.scss";
import TeamIcons from "./TeamIcons";
import { useNavigate } from "react-router-dom";
import Ended from "./Ended";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

const CardSlider = ({ data, type }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1001px)" });
  const baseURL = "https://pixelsport.tv/backend";
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: 20,
    drag: true,
    arrows: false,
  };
  const navigate = useNavigate();
  return (
    <>
      {isDekstop && (
        <div
          className="Cardslider "
          style={{
            width: "73%",
            height: "AUTO",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            marginBottom: "20px",
          }}
        >
          <div className=" ml-1">
            <Splide options={{ ...splideOptions, width: 1400 }}>
              <>
                {data
                  .sort((a, b) => {
                    return (
                      new Date(a.date).getTime() - new Date(b.date).getTime()
                    );
                  })
                  .sort((a, b) => {
                    const eventTimeA = moment(a.date).utc();
                    const eventTimeB = moment(b.date).utc();
                    const currentTimeLocal = moment();

                    const isLiveA = currentTimeLocal.isBetween(
                      eventTimeA,
                      eventTimeA
                        .clone()
                        .add(
                          type == "NBA"
                            ? 2.6
                            : type == "NHL"
                            ? 3.5
                            : type == "MLB"
                            ? 3.5
                            : 3.5,
                          "hours"
                        )
                    );
                    const isLiveB = currentTimeLocal.isBetween(
                      eventTimeB,
                      eventTimeB
                        .clone()
                        .add(
                          type == "NBA"
                            ? 2.6
                            : type == "NHL"
                            ? 3.5
                            : type == "MLB"
                            ? 3.5
                            : 3.5,
                          "hours"
                        )
                    );

                    // The following comparison will bring live events to the front
                    if (isLiveA && !isLiveB) {
                      return 0;
                    } else if (!isLiveA && isLiveB) {
                      return -1;
                    } else {
                      return 1;
                    }
                  })
                  .reverse()
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
                      <div className="placeAndTime border w-[100%] h-[auto] p-1  flex justify-between flex-row  bg-[black] bg-opacity-40">
                        {/* {(item)} */}
                        <p className="text-white text-sm">
                          {truncateText(item?.location, 15)}
                        </p>
                        <p className="text-white text-sm">
                          {item?.date &&
                            truncateText(
                              moment
                                .utc(item?.date)
                                .utcOffset("-0500")
                                .format("MM/DD/YYYY hh:mm:ss A")
                                .split("T")[0],
                              10
                            )}
                        </p>
                      </div>

                      <div
                        className="container relative "
                        style={{ marginTop: "25px" }}
                      >
                        <div className="">
                          <TeamIcons
                            iconsData={[
                              {
                                iconUrl: item.competitors1_logo.includes("https") ? item.competitors1_logo : `${baseURL}${item.competitors1_logoimagePath.replace("/uploads", "")}`,
                                name: item.competitors1_displayName,
                              },
                              {
                                iconUrl: item.competitors2_logo.includes("https") ? item.competitors2_logo : `${baseURL}${item.competitors2_logo.imagePath.replace("/uploads", "")}`,
                                name: item.competitors2_displayName,
                              },
                            ]}
                          />
                        </div>
                        <div className="card-live-end">
                          <Ended
                            show={item?.date}
                            type={item.channel.TVCategory.name}
                          />
                        </div>
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
            width: "100%",
          }}
        >
          <div className=" ml-1">
            <Splide
              options={{ ...splideOptions, width: 1400 }}
              // className="custom-splide"
            >
              <>
                {data
                  ?.sort((a, b) => new Date(b?.date) - new Date(a?.date))
                  .sort((a, b) => {
                    const eventTimeA = moment(a.date).utc();
                    const eventTimeB = moment(b.date).utc();
                    const currentTimeLocal = moment();

                    const isLiveA = currentTimeLocal.isBetween(
                      eventTimeA,
                      eventTimeA
                        .clone()
                        .add(
                          type == "NBA"
                            ? 2.6
                            : type == "NHL"
                            ? 3.5
                            : type == "MLB"
                            ? 3.5
                            : 3.5,
                          "hours"
                        )
                    );
                    const isLiveB = currentTimeLocal.isBetween(
                      eventTimeB,
                      eventTimeB
                        .clone()
                        .add(
                          type == "NBA"
                            ? 2.6
                            : type == "NHL"
                            ? 3.5
                            : type == "MLB"
                            ? 3.5
                            : 3.5,
                          "hours"
                        )
                    );

                    // The following comparison will bring live events to the front
                    if (isLiveA && !isLiveB) {
                      return 0;
                    } else if (!isLiveA && isLiveB) {
                      return -1;
                    } else {
                      return 1;
                    }
                  })
                  .reverse()
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
                      <div className="placeAndTime border w-[100%] h-[auto] p-1  flex justify-between flex-row  bg-[black] bg-opacity-40">
                        <p className="text-white text-sm">
                          {truncateText(item.location, 5)}
                        </p>
                        <p className="text-white text-sm">
                          {item.date &&
                            truncateText(
                              moment
                                .utc(item.date)
                                .utcOffset("-0500")
                                .format("MM/DD/YYYY hh:mm:ss A")
                                .split("T")[0],
                              10
                            )}
                        </p>
                      </div>

                      <div
                        className="boox"
                        style={{ marginTop: "25px", width: "90%" }}
                      >
                        <TeamIcons
                          iconsData={[
                            {
                              iconUrl: item.competitors1_logo.includes("https") ? item.competitors1_logo : `${baseURL}${item.competitors1_logo}`,
                              name: item.competitors1_displayName,
                            },
                            {
                              iconUrl: item.competitors2_logo.includes("https") ? item.competitors2_logo : `${baseURL}${item.competitors2_logo}`,
                              name: item.competitors2_displayName,
                            },
                          ]}
                        />
                        <Ended
                          show={item?.date}
                          type={item.channel.TVCategory.name}
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
