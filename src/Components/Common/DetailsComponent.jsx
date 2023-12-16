import React from "react";
import "../../Assets/styles/CardDetailss.scss";
import DetailsIcon from "./DetailsIcon";
import VideoPlayer from "./VideoPlayer";

function DetailsComponent({ data, url }) {
  return (
    <div className="flex !justify-center mt-3">
      {data?.data?.date &&
      new Date(data?.data?.date) - new Date() >= 0 &&
      new Date(data?.data?.date) - new Date() / (1000 * 60 * 60) <= 3.5 ? (
        <VideoPlayer url={url} />
      ) : (
        <div
          className="w-[80rem] h-[35rem]   deatil-container"
          style={{
            background: `linear-gradient(-60deg, #${
              data?.data?.competitors?.filter(
                (comp) => comp.homeAway == "home"
              )[0].color
            } 50%, #${
              data?.data?.competitors?.filter(
                (comp) => comp.homeAway != "home"
              )[0].alternateColor
            } 50%)`,
          }}
        >
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
            <DetailsIcon
              iconsData={data?.data?.competitors?.map((comp) => ({
                iconUrl: comp.logo,
                name: comp.name,
              }))}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsComponent;
