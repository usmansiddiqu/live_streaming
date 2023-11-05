import React from "react";
import Button from "./Common/Button";
import "../Assets/styles/Button.css";
import Play from "../Assets/Icons/play-button-arrowhead.png";
import Crown from "../Assets/Icons/crown.png";

function BannerButtons() {
  return (
    <div className="banner-Buttons w-[14vw] h-[auto] flex justify-between mt-[-105px] ml-[25px]">
      <Button text="WATCH" src={Play} className="pre-Button rounded-md" />
      <Button text="BUY PLAN" src={Crown} className="post-Button rounded-md" />
    </div>
  );
}

export default BannerButtons;
