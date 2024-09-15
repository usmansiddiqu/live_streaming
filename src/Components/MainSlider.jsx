import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BannerButtons from "./BannerButtons";
import "../Assets/styles/MainSlider.scss";
import { url } from "../helper/url";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CarouselSlider from "./CarouselSlider";
import { useSliderQuery } from "../api/services/slider";
import Skeleton from "react-loading-skeleton";

function MainSlider() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1025px)" });

  const { data, isLoading } = useSliderQuery();

  const navigate = useNavigate();
  // if (isLoading) {
  //   return <Skeleton count={5} />;
  // }

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
            margin: "auto",
            // padding: "15px",
            background: "#0D0620",
            // boxShadow: "1px 2px 14px 7px rgba(0,0,0,0.51)",
            position: "relative",
          }}
          className="mainSlider p-3 mt-2"
        >
          <Splide
            options={{
              start: 3,
              perPage: 1,
              perMove: 1,
              pagination: false,
              rewind: true,
              type: "loop",
              padding: "8.5rem",
              gap: "0.4rem",
              // autoplay: true,
              width: 1400,
              height: 450,
              arrows: false,
              preloadPages: 2,
              lazyLoad: "nearby",
            }}
            style={{
              borderRadius: "20px",
              position: "relative",
            }}
          >
            {console.log(data)}
            {data.data
              ?.filter((card) => card?.status)
              .map((card, key) => (
                <SplideSlide className="rounded absolute">
                  <img
                    src={
                      url +
                      "\\" +
                      card.image
                        .replace("uploads\\", "")
                        .replace("uploads/", "")
                    }
                    alt={`Image ${key}`}
                    style={{ filter: "brightness(70%) saturate(150%)" }}
                  />
                  <div
                    className="z-80  absolute"
                    style={{ marginTop: "-90px" }}
                  >
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
