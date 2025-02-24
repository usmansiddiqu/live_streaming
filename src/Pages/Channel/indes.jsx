import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DashHeader from "../../Components/Dashboard/DashHeader";
import { sliderApi, useSliderQuery } from "../../api/services/slider"; // Import the API
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Ended from "../../Components/Common/Ended";
import { url } from "../../helper/url";
import getSliders from "../../api/getSlider";

function Channel() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1700px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1701px)" });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const fetchSliderData = async () => {
    try {
      setLoading(true);

      const data = await getSliders();
      setData(data.data.data);
      console.log(data.data.data);

      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSliderData();
  }, []);

  const skeletonProps = {
    baseColor: "#170f2c",
    highlightColor: "#332e47",
  };

  return (
    <div>
      <div style={{ minHeight: "100vh", overflow: "hidden !important" }}>
        <Nav />
        <DashHeader title={"24/7 LIVE"} subtitle="Channel" />
        {loading ? (
          <div className="flex items-center justify-center relative pt-1 mt-3">
            <div className=" card-con mb-4 w-full md:w-3/4 lg:w-2/3">
              <Skeleton
                height={200}
                count={3}
                {...skeletonProps}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center">
            <p>Error fetching data: {error.message}</p>
          </div>
        ) : (
          <div className="relative">
            <div className="relative">
              <div className="flex items-center justify-center relative">
                <div>
                  {isDekstop && (
                    <div className="grid card-con xl:grid-cols-4 p-3 mx-auto !w-[89rem] gap-4 mb-4  mt-2">
                      {data
                        .filter((item) => item.status)
                        .map((item) => (
                          <div
                            className="w-[330px] h-[180px] border score-card"
                            onClick={() => navigate(`/live/${item._id}`)}
                            key={item._id}
                          >
                            <div
                              className="card-Slider cursor-pointer w-[100%] h-[100%]"
                              style={{ background: "none" }}
                            >
                              <div
                                className="border w-[100%] px-2 flex justify-between flex-row text-white"
                                style={{ background: "rgba(0, 0, 0, 0.5)" }}
                              >
                                <p className="mb-1">{item?.title}</p>
                              </div>
                              <img
                                className="w-[360px] h-[148px]"
                                src={
                                  url +
                                  "\\" +
                                  item.image
                                    .replace("uploads\\", "")
                                    .replace("uploads/", "")
                                }
                              />
                              <div className="relative top-[-40px]">
                                <Ended
                                  show={new Date(item?.date)}
                                  flag={true}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                  {isTabletOrMobile && (
                    <div className="grid card-con grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 py-3 mx-auto gap-3 mb-4">
                      {data
                        .filter((item) => item.status)
                        .map((item) => (
                          <div
                            className="w-[310px] h-[180px] border score-card"
                            onClick={() => navigate(`/live/${item._id}`)}
                            key={item._id}
                          >
                            <div
                              className="card-Slider cursor-pointer w-[100%] h-[100%]"
                              style={{ background: "none" }}
                            >
                              <div
                                className="border w-[100%] px-2 flex justify-between flex-row text-white"
                                style={{ background: "rgba(0, 0, 0, 0.5)" }}
                              >
                                <p className="mb-1">{item?.title}</p>
                              </div>
                              <img
                                className="w-[360px] h-[148px]"
                                src={
                                  url +
                                  "\\" +
                                  item.image
                                    .replace("uploads\\", "")
                                    .replace("uploads/", "")
                                }
                              />
                              <div className="relative top-[-40px] ended-channel">
                                <Ended
                                  show={new Date(item?.date)}
                                  flag={true}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
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
