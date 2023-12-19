import React, { useEffect, useState } from "react";

import BannerButtons from "./BannerButtons";
import "../Assets/styles/MainSlider.scss";
import getSliders from "../api/getSlider";
import { url } from "../helper/url";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";

function CarouselSlider() {
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
    <div className="bg-[#0D0620] bg-tab-mb">
      <Carousel data-bs-theme="dark">
        {data
          ?.filter((card) => card?.status)
          .map((card, key) => (
            <Carousel.Item key={key}>
              <img
                className="d-block  h-[30vh] mbl-bg-img"
                src={
                  url +
                  "\\" +
                  card.image
                    .replace("uploads\\", "")
                    .replace("uploads/", "")
                }
                alt={`Image ${key}`}
                  style={{ filter: 'brightness(70%) saturate(150%)'}}
              />
              <div
                className="flex flex-col w-[100vw] absolute"
                style={{
                  left: "2%",
                  top: "50%",
                }}
              >
                <h1 className="text-white banner-textt text-4xl font-bold absolute">
                  {card?.title}
                </h1>
                <BannerButtons onWatch={() => navigate(`/live/${card._id}`)} />
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
