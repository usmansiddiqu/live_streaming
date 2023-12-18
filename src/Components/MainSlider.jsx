import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BannerButtons from "./BannerButtons";
import "../Assets/styles/MainSlider.scss";
import getSliders from "../api/getSlider";
import { url } from "../helper/url";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CarouselSlider from "./CarouselSlider";

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
      {console.log(isTabletOrMobile, isDekstop, "check1234")}
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
                    style={{ filter: "brightness(70%) saturate(150%)" }}
                  />

                  <h1
                    className="text-white banner-text text-4xl font-bold absolute"
                    style={{
                      left: "2%",
                      top: "58%",
                    }}
                  >
                    {card?.title}
                  </h1>
                  <div className="mt-[-90px] z-80">
                    <BannerButtons
                      onWatch={() => navigate(`/live/${card._id}`)}
                    />
                  </div>
                </SplideSlide>
              ))}
          </Splide>
        </div>
      )}

      {isTabletOrMobile && (
        <>
          <CarouselSlider />
        </>
      )}
    </>
  );
}

export default MainSlider;
