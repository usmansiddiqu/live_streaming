import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import BannerButtons from "./BannerButtons";
import "../Assets/styles/MainSlider.scss";
import getSliders from "../api/getSlider";
import { url } from "../helper/url";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <>
          <Carousel data-bs-theme="dark">
            {data
              ?.filter((card) => card?.status)
              .map((card, key) => (
                <Carousel.Item key={key}>
                  <img
                    className="d-block w-100 h-[30vh]"
                    src={url + "\\" + card.image.replace("uploads\\", "")}
                    alt={`Image ${key}`}
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
                    <BannerButtons
                      onWatch={() => navigate(`/live/${card._id}`)}
                    />
                  </div>
                </Carousel.Item>
              ))}
          </Carousel>
        </>
      )}
    </>
  );
}

export default MainSlider;
