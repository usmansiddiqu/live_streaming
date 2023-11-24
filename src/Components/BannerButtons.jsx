import React from "react";
import Button from "./Common/Button";
import "../Assets/styles/Button.scss";
import Play from "../Assets/Icons/play-button-arrowhead.png";
import Crown from "../Assets/Icons/crown.png";

function BannerButtons() {
  return (
    <div className="banner-Buttons w-[14vw] h-[auto] flex justify-between mt-[-70px] ml-[25px]">
      <Button text="WATCH" src={Play} className="pre-Button rounded text-sm" />
      <Button
        text="BUY PLAN"
        src={Crown}
        className="post-Button rounded text-sm"
      />
    </div>
  );
}

export default BannerButtons;
