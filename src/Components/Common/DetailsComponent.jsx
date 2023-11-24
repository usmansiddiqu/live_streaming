import React from "react";
import "../../Assets/styles/CardSlider.css";
import DetailsIcon from "./DetailsIcon";
const dummyIcons = [
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/128/1039/1039386.png",
    name: "Icon 1",
  },
  {
    iconUrl: "https://cdn-icons-png.flaticon.com/128/1201/1201923.png",
    name: "Icon 2",
  },
];
function DetailsComponent() {
  return (
    <div className="flex !justify-center">
      <div className="cardSlider !w-[80rem] !h-[35rem]  ">
        <div
          className="placeAndTime"
          style={{
            width: "92%",
            height: "3vh",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            margin: "auto",
          }}
        ></div>

        <div className="" style={{ marginTop: "25px" }}>
          <DetailsIcon iconsData={dummyIcons} />
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
