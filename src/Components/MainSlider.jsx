import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Banner1 from "../Assets/Images/MLB HD Pass.webp";
import Banner2 from "../Assets/Images/NBA HD Pass.webp";
import Banner3 from "../Assets/Images/NFL HD Pass.webp";
import Banner4 from "../Assets/Images/NHL LIVE 4k.webp";
import BannerButtons from "./BannerButtons";

function MainSlider() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15px",
        height: "57vh",
        // margin: "auto",
        background: "#0D0620",
        boxShadow: "1px 2px 14px 7px rgba(0,0,0,0.51)",
      }}
    >
      <Splide
        options={{
          perPage: 1,
          perMove: 1,
          pagination: false,
          rewind: true,
          type: "loop",
          padding: "5rem",
          gap: "1.5rem",
          autoplay: true,
          width: 1200,
        }}
      >
        <SplideSlide className="rounded">
          <img src={Banner1} alt="Image 1" />
          <BannerButtons />
        </SplideSlide>
        <SplideSlide>
          <img src={Banner2} alt="Image 2" />
          <BannerButtons />
        </SplideSlide>
        <SplideSlide>
          <img src={Banner3} alt="Image 3" />
          <BannerButtons />
        </SplideSlide>
        <SplideSlide>
          <img src={Banner4} alt="Image 4" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default MainSlider;
