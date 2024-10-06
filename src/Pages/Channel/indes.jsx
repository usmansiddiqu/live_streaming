import React, { useEffect, useState } from "react";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Card from "../../Components/Common/Card";
import getEvents from "../../api/getEvents";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashHeader from "../../Components/Dashboard/DashHeader";
import { useSliderQuery } from "../../api/services/slider";
import { useMediaQuery } from "react-responsive";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import AnotherTeamIcons from "../../Components/Common/AnotherTeamIcons";
import Ended from "../../Components/Common/Ended";
import { url } from "../../helper/url";

function Channel() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1700px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1701px)" });
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  // const [data, setData] = useState([]);

  const { data, isLoading } = useSliderQuery();

  // const getData = async () => {
  //   setLoading(true);
  //   const { data: response } = await getEvents();
  //   setData(
  //     response.events.filter((card) => card.channel.TVCategory.name === "MLB")
  //   );
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const skeletonProps = {
    baseColor: "#170f2c", // Dark background color
    highlightColor: "#332e47", // Lighter highlight for the animation effect
  };
  console.log(data?.data);
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          overflow: "hidden !important",
        }}
      >
        <Nav />
        <DashHeader title={"24/7 LIVE"} subtitle="Channel" />
        {isLoading ? (
          <div className="flex items-center justify-center relative pt-2">
            <div className="w-[93%] md:w-[73%] mb-4">
              <Skeleton
                height={200}
                count={3}
                {...skeletonProps}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </div>
        ) : (
          // <Card data={data} title={"24/7"} subtitle="Channel" />
          <div className="relative">
            <div className="relative">
              <div class=" flex items-center justify-center relative">
                <div class=" ">
                  {isDekstop && (
                    <div class="grid card-con xl:grid-cols-4 p-3 mx-auto !w-[89rem] gap-4 mb-4">
                      <>
                        {data.data
                          .sort((item) => {
                            console.log(item.status);
                            return item.status === true;
                          })
                          .map((item) => (
                            <div
                              class="w-[330px] h-[180px] border score-card"
                              onClick={() => navigate(`/live/${item._id}`)}
                            >
                              <div
                                className="card-Slider cursor-pointer w-[100%] h-[100%]"
                                key={item._id}
                                // style={{
                                //   border: "1px solid white",
                                //   background: `linear-gradient(-60deg, #${
                                //     item.competitors1_color === "ffffff"
                                //       ? "808080"
                                //       : item.competitors1_color
                                //   } 50%, #${
                                //     item.competitors1_alternateColor ===
                                //     "ffffff"
                                //       ? "808080"
                                //       : item.competitors1_alternateColor
                                //   } 50%)`,
                                // }}
                              >
                                <div className="placeAndTime  border w-[100%]  flex justify-between flex-row p-1 px-2 bg-[black] bg-opacity-40 text-white">
                                  {/* <p>{truncateText(item?.location, 18)}</p> */}
                                </div>

                                <div className="container px-7">
                                  {/* <AnotherTeamIcons
                                  iconsData={[
                                    {
                                      iconUrl: item.competitors1_logo,
                                      name: item.competitors1_name,
                                      score: item.competitors1_score,
                                    },
                                    {
                                      iconUrl: item.competitors2_logo,
                                      name: item.competitors2_name,
                                      score: item.competitors2_score,
                                    },
                                  ]}
                                /> */}
                                  <img
                                    src={
                                      url +
                                      "\\" +
                                      item.image
                                        .replace("uploads\\", "")
                                        .replace("uploads/", "")
                                    }
                                  />

                                  <div>
                                    <Ended
                                      show={new Date(item?.date)}
                                      // type={item.channel.TVCategory.name}
                                      flag={true}
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
                        {data.data
                          // ?.sort(
                          //   (a, b) => new Date(a?.date) - new Date(b?.date)
                          // )
                          // .sort((a, b) => {
                          //   const eventTimeA = moment(a.date).utc();
                          //   const eventTimeB = moment(b.date).utc();
                          //   const currentTimeLocal = moment();

                          //   const isLiveA = currentTimeLocal.isBetween(
                          //     eventTimeA,
                          //     eventTimeA.clone().add(4, "hours")
                          //   );
                          //   const isLiveB = currentTimeLocal.isBetween(
                          //     eventTimeB,
                          //     eventTimeB.clone().add(4, "hours")
                          //   );

                          //   if (isLiveA && !isLiveB) {
                          //     return -1;
                          //   } else if (!isLiveA && isLiveB) {
                          //     return 1;
                          //   } else {
                          //     return 0;
                          //   }
                          // })
                          .map((item) => (
                            <div
                              class="w-[310px] h-[180px] border score-card"
                              onClick={() => navigate(`/live/${item._id}`)}
                            >
                              <div
                                className="card-Slider cursor-pointer w-[100%] h-[100%]"
                                key={item._id}
                              >
                                <div className="placeAndTime  border w-[100%]  flex justify-between flex-row p-1 px-2 bg-[black] bg-opacity-40 text-white">
                                  <p>{item?.location}</p>
                                </div>

                                <div className="container px-7">
                                  <img
                                    src={
                                      url +
                                      "\\" +
                                      item.image
                                        .replace("uploads\\", "")
                                        .replace("uploads/", "")
                                    }
                                  />

                                  <div>
                                    <Ended
                                      show={new Date(item?.date)}
                                      flag={true}
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
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Channel;
