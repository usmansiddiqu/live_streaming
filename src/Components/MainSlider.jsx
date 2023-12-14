import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BannerButtons from "./BannerButtons";
import "../Assets/styles/MainSlider.scss";
import getSliders from "../api/getSlider";
import { url } from "../helper/url";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function MainSlider() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1001px)" });
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data: response } = await getSliders();
    setData(response?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {isDekstop && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "35px",
            // height: "55vh",
            margin: "auto",
            // padding: "15px",
            background: "#0D0620",
            // boxShadow: "1px 2px 14px 7px rgba(0,0,0,0.51)",
          }}
          className="mainSlider"
        >
          <Splide
            options={{
              perPage: 1,
              perMove: 1,
              pagination: false,
              rewind: true,
              type: "loop",
              padding: "8.5rem",
              gap: "0.4rem",
              // autoplay: true,
              width: 1400,
            }}
            style={{ borderRadius: "20px" }}
          >
            {data
              ?.filter((card) => card?.status)
              .map((card, key) => (
                <SplideSlide className="rounded">
                  <img
                    src={url + "\\" + card.image.replace("uploads\\", "")}
                    alt={`Image ${key}`}
                  />

                  <h1
                    className="text-white banner-text text-4xl font-bold absolute"
                    style={{
                      left: "2%",
                      top: "67%",
                    }}
                  >
                    {card?.title}
                  </h1>
                  <BannerButtons
                    onWatch={() => navigate(`/live/${card._id}`)}
                  />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      )}

      {isTabletOrMobile && (
        <div>
          <div
            id="animation-carousel"
            class="relative w-full"
            data-carousel="static"
          >
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96 ">
              {data
                ?.filter((card) => card?.status)
                .map((card, key) => (
                  <div
                    class="hidden duration-200 ease-linear"
                    data-carousel-item
                  >
                    <img
                      src={url + "\\" + card.image.replace("uploads\\", "")}
                      alt={`Image ${key}`}
                      class="absolute bg-img block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                    <h1
                      className="text-white  text-xl font-bold absolute"
                      style={{
                        left: "2%",
                        top: "67%",
                      }}
                    >
                      {card?.title}
                    </h1>
                    <BannerButtons
                      onWatch={() => navigate(`/live/${card._id}`)}
                    />
                  </div>
                ))}
            </div>

            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainSlider;
