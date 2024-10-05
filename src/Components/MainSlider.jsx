import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BannerButtons from "./BannerButtons";
import "../Assets/styles/MainSlider.scss";
import { url } from "../helper/url";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import CarouselSlider from "./CarouselSlider";
import { useSliderQuery } from "../api/services/slider";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BannerImge from "./../Assets/Images/SNPLUS_HEADER-IMAGE_JAN_1200X680_JAN588.png";
import AOS from "aos";
import "aos/dist/aos.css";

function MainSlider() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1025px)" });
  useEffect(() => {
    AOS.init();
  }, []);
  const { isLoading } = useSliderQuery();

  const navigate = useNavigate();

  const skeletonProps = {
    baseColor: "#170f2c", // Dark background color
    highlightColor: "#332e47", // Lighter highlight for the animation effect
  };

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "35px",
          background: "#0D0620",
        }}
        className="mainSlider p-3 mt-2"
      >
        <Skeleton height={450} width={1400} count={1} {...skeletonProps} />
      </div>
    );
  }

  return (
    <>
      <div className="w-[73%] mx-auto mt-[30px] flex justify-between main-banner-container">
        <div
          className="w-[600px] banner-text-container"
          data-aos="fade"
          data-aos-duration="1000"
        >
          <div
            className="flex flex-col gap-[15px] mb-[28px]"
            style={{ overflowY: "hidden" }}
          >
            <h1
              className="text-white banner-img-text"
              style={{
                fontSize: "48px",
                lineHeight: "60px",
                fontWeight: "700",
              }}
            >
              STREAM THE MLB, NFL, NHL, NBA AND MORE
            </h1>
            <h3
              className="text-white banner-para-text"
              style={{
                fontSize: "24px",
                lineHeight: "30px",
              }}
            >
              Choose the plan that's right for you!
            </h3>
            <button
              className="bg-[#156BAC] w-[358px] h-[48px] text-white rounded-[4px] banner-btn"
              style={{ fontSize: "18px", fontWeight: "700" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={() => navigate("/membership_plan")}
            >
              <div
                data-aos="fade"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
              >
                SUBSCRIBE
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-[15px]">
            <h3
              className="text-white banner-para-text"
              style={{
                fontSize: "24px",
                lineHeight: "30px",
              }}
            >
              Have PixelSport Premium?
            </h3>
            <button
              className=" w-[358px] border border-white h-[48px] text-white rounded-[4px] banner-btn"
              style={{ fontSize: "18px", fontWeight: "700" }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p
                data-aos="fade"
                data-aos-easing="ease-in"
                data-aos-duration="1500"
                onClick={() => navigate("/login")}
              >
                SIGN IN
              </p>
            </button>
          </div>
        </div>
        <div
          className="w-[876px] h-[465px] banner-img"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src={BannerImge} alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
      {/* {isDekstop && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "35px",
            background: "#0D0620",
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
              width: 1400,
              height: 450,
              arrows: false,
              preloadPages: 2,
              lazyLoad: "nearby",
              autoplay: true,
            }}
            style={{
              borderRadius: "20px",
              position: "relative",
            }}
          >
            {data.data
              ?.filter((card) => card?.status)
              .map((card, key) => (
                <SplideSlide className="rounded absolute" key={key}>
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
                  <div className="z-80 absolute" style={{ marginTop: "-90px" }}>
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
      )} */}
    </>
  );
}

export default MainSlider;
