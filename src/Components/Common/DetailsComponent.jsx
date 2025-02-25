import React from "react";
import "../../Assets/styles/CardDetailss.scss";
import DetailsIcon from "./DetailsIcon";
import VideoPlayer from "./VideoPlayer";
import ClapprPlayer from "./ClapprPlayer";
import moment from "moment-timezone";
import { useParams } from "react-router-dom";
import LiveChat from "../ChatSection";
import "../../Assets/styles/DetailComponent.scss";

function DetailsComponent({ data, url }) {
  const { type } = useParams();
  const currentTime = moment();
  const eventTime = moment(data?.date).utc();
  const baseURL = "https://pixelsport.tv/backend";

  const isTimeWithinRange =
    data?.date &&
    currentTime.isBetween(
      eventTime.clone().subtract(15, "minutes"),
      eventTime
        .clone()
        .add(
          type == "NBA" ? 2.6 : type == "NHL" ? 3.5 : type == "MLB" ? 3.5 : 3.5,
          "hours"
        )
    );

  return (
    <div className="flex !justify-center  clapper-palyer">
      {isTimeWithinRange ? (
        <div
          className="detail-clapper-player-container"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <div className=" mt-2 flex h-full detail-clapper-player">
            <ClapprPlayer url={url} />
          </div>
        </div>
      ) : (
        <div
          className="w-[60vw] watch-img h-[35rem] deatil-container mt-2"
          style={{
            background: `linear-gradient(-60deg, #${
              data.competitors1_color === "ffffff"
                ? "808080"
                : data.competitors1_color
            } 50%, #${
              data.competitors1_alternateColor === "ffffff"
                ? "808080"
                : data.competitors1_alternateColor
            } 50%)`,
          }}
        >
          <div
            className="placeAndTime"
            style={{
              width: "100%",
              height: "3vh",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              margin: "auto",
            }}
          ></div>

          <div className="" style={{ marginTop: "25px" }}>
            <DetailsIcon
              iconsData={[
                {
                  iconUrl: data.competitors1_logo?.includes("https") ? data.competitors1_logo : `${baseURL}${data.competitors1_logo}`,
                  name: data.competitors1_displayName,
                },
                {
                  iconUrl: data.competitors2_logo?.includes("https") ? data.competitors2_logo : `${baseURL}${data.competitors2_logo}`,
                  name: data.competitors2_displayName,
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailsComponent;
