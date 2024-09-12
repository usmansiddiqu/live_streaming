import React, { useEffect, useState } from "react";

import BannerButtons from "./BannerButtons";
import "../Assets/styles/MainSlider.scss";
import getSliders from "../api/getSlider";
import { url } from "../helper/url";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useSliderQuery } from "../api/services/slider";
import Skeleton from "react-loading-skeleton";
// import "bootstrap/dist/css/bootstrap.min.css";

function CarouselSlider() {
  const { data, isLoading } = useSliderQuery();

  const navigate = useNavigate();
  if (isLoading) {
    return <Skeleton count={5} />;
  }
  return (
    <div
      className="bg-[#0D0629] mbl-slider-bg-color flex items-center mt-3"
      style={{ paddingBottom: "10px", paddingTop: "10px" }}
    >
      <Carousel data-bs-theme="dark">
        {data.data
          ?.filter((card) => card?.status)
          .map((card, key) => (
            <Carousel.Item key={key}>
              <img
                className="d-block mbl-img-banner h-[100%]"
                src={
                  url +
                  "\\" +
                  card.image.replace("uploads\\", "").replace("uploads/", "")
                }
                alt={`Image ${key}`}
                style={{ filter: "brightness(70%) saturate(150%)" }}
              />
              <div
                className="flex flex-col w-[100vw] absolute"
                style={{
                  left: "2%",
                  top: "80%",
                }}
              >
                <BannerButtons onWatch={() => navigate(`/live/${card._id}`)} />
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
