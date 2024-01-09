import React from "react";
import DashHeader from "../Dashboard/DashHeader";
import { useNavigate, useParams } from "react-router-dom";
import AnotherTeamIcons from "./AnotherTeamIcons";
import Ended from "./Ended";
import { useMediaQuery } from "react-responsive";
import moment from "moment";
import Footer from "../Footer";

function Card({ data, title, subtitle }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1700px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1701px)" });
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="relative">
        <DashHeader title={title} subtitle={subtitle} />
        <div class=" flex items-center justify-center relative">
          <div class=" ">
            {isDekstop && (
              <div class="grid card-con xl:grid-cols-4 p-3 mx-auto !w-[89rem] gap-4 mb-4">
                <>
                  {data
                    ?.sort(
                      (a, b) =>
                        new Date(a?.data?.date) - new Date(b?.data?.date)
                    )
                    .sort((a, b) => {
                      const eventTimeA = moment(a.data.date).utc();
                      const eventTimeB = moment(b.data.date).utc();
                      const currentTimeLocal = moment();

                      const isLiveA = currentTimeLocal.isBetween(
                        eventTimeA,
                        eventTimeA.clone().add(4, "hours")
                      );
                      const isLiveB = currentTimeLocal.isBetween(
                        eventTimeB,
                        eventTimeB.clone().add(4, "hours")
                      );

                      // The following comparison will bring live events to the front
                      if (isLiveA && !isLiveB) {
                        return -1;
                      } else if (!isLiveA && isLiveB) {
                        return 1;
                      } else {
                        return 0;
                      }
                    })
                    .map((item) => (
                      <div
                        class="w-[330px] h-[180px] border score-card"
                        onClick={() =>
                          navigate(
                            `/${item.channel.TVCategory?.name}/live/${item._id}`
                          )
                        }
                      >
                        <div
                          className="card-Slider cursor-pointer w-[100%] h-[100%]"
                          key={item._id}
                          style={{
                            border: "1px solid white",
                            background: `linear-gradient(-60deg, #${
                              item.data.competitors.filter(
                                (comp) => comp.homeAway == "home"
                              )[0].color === "ffffff"
                                ? "808080"
                                : item.data.competitors.filter(
                                    (comp) => comp.homeAway == "home"
                                  )[0].color
                            } 50%, #${
                              item.data.competitors.filter(
                                (comp) => comp.homeAway == "home"
                              )[0].alternateColor === "ffffff"
                                ? "808080"
                                : item.data.competitors.filter(
                                    (comp) => comp.homeAway == "home"
                                  )[0].alternateColor
                            } 50%)`,
                          }}
                        >
                          <div className="placeAndTime  border w-[100%]  flex justify-between flex-row p-1 px-2 bg-[black] bg-opacity-40 text-white">
                            <p>{truncateText(item.data.location, 18)}</p>
                            <p>
                              {" "}
                              {
                                moment
                                  .utc(item.data.date)
                                  .utcOffset("-0500")
                                  .format("MM/DD/YYYY hh:mm:ss A")
                                  .split(" ")[0]
                              }
                            </p>
                          </div>

                          <div className="container px-7">
                            <AnotherTeamIcons
                              iconsData={item.data.competitors.map((comp) => ({
                                iconUrl: comp.logo,
                                name: comp.name,
                                score: comp.score,
                              }))}
                            />
                            <div>
                              <Ended
                                show={new Date(item?.data?.date)}
                                type={item.channel.TVCategory.name}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              </div>
            )}
            {isTabletOrMobile && (
              <div class="grid card-con grid-cols-1!w-[73vw] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-3 mx-auto gap-3 mb-4 Match-cards-div ">
                <>
                  {data
                    ?.sort(
                      (a, b) =>
                        new Date(a?.data?.date) - new Date(b?.data?.date)
                    )
                    .sort((a, b) => {
                      const eventTimeA = moment(a.data.date).utc();
                      const eventTimeB = moment(b.data.date).utc();
                      const currentTimeLocal = moment();

                      const isLiveA = currentTimeLocal.isBetween(
                        eventTimeA,
                        eventTimeA.clone().add(4, "hours")
                      );
                      const isLiveB = currentTimeLocal.isBetween(
                        eventTimeB,
                        eventTimeB.clone().add(4, "hours")
                      );

                      // The following comparison will bring live events to the front
                      if (isLiveA && !isLiveB) {
                        return -1;
                      } else if (!isLiveA && isLiveB) {
                        return 1;
                      } else {
                        return 0;
                      }
                    })
                    .map((item) => (
                      <div
                        class="w-[310px] h-[180px] border score-card"
                        onClick={() =>
                          navigate(
                            `/${item.channel.TVCategory?.name}/live/${item._id}`
                          )
                        }
                      >
                        <div
                          className="card-Slider cursor-pointer w-[100%] h-[100%]"
                          key={item._id}
                          style={{
                            border: "1px solid white",
                            background: `linear-gradient(-60deg, #${
                              item.data.competitors.filter(
                                (comp) => comp.homeAway == "home"
                              )[0].color === "ffffff"
                                ? "808080"
                                : item.data.competitors.filter(
                                    (comp) => comp.homeAway == "home"
                                  )[0].color
                            } 50%, #${
                              item.data.competitors.filter(
                                (comp) => comp.homeAway == "home"
                              )[0].color === "ffffff"
                                ? "808080"
                                : item.data.competitors.filter(
                                    (comp) => comp.homeAway == "home"
                                  )[0].alternateColor
                            } 50%)`,
                          }}
                        >
                          <div className="placeAndTime  border w-[100%]  flex justify-between flex-row p-1 px-2 bg-[black] bg-opacity-40 text-white">
                            <p>{item.data.location}</p>
                            <p> {item.data.date.split("T")[0]}</p>
                          </div>

                          <div className="container px-7">
                            <AnotherTeamIcons
                              iconsData={item.data.competitors.map((comp) => ({
                                iconUrl: comp.logo,
                                name: comp.name,
                                score: comp.score,
                              }))}
                            />
                            <div>
                              <Ended
                                show={new Date(item?.data?.date)}
                                type={item.channel.TVCategory.name}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
