import React from "react";
import Button from "./Common/Button";
import "../Assets/styles/Button.scss";
import Play from "../Assets/Icons/play-button-arrowhead.png";
import Crown from "../Assets/Icons/crown.png";

function BannerButtons({ onWatch }) {
  return (
    <div className="banner-Buttons relative w-[13vw]  h-[auto]  flex justify-between mt-[-70px] ml-[25px]">
      <Button
        text="WATCH"
        src={Play}
        className="pre-Button rounded text-sm"
        style={{
          boxShadow: "1px 2px 14px 7px rgba(0,0,0,0.51)",
        }}
        onClick={onWatch}
      />
      <Button
        text="BUY PLAN"
        src={Crown}
        className="post-Button rounded text-sm"
        style={{
          boxShadow: "1px 2px 14px 7px rgba(0,0,0,0.51)",
        }}
      />
    </div>
  );
}

export default BannerButtons;
