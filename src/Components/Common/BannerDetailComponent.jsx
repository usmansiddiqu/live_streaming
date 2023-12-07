import React, { useEffect, useState } from "react";
import "../../Assets/styles/CardDetailss.scss";
import DetailsIcon from "./DetailsIcon";
import VideoPlayer from "./VideoPlayer";

function BannerDetailComponent({ data, url }) {
  const [show, setShow] = useState(true);
  const [videoPlayer, setVideoPlayer] = useState(false);
  // setTimeout(() => setShow(true), 10000);
  return (
    <div className="flex !justify-center">
      {show ? (
        <VideoPlayer url={url} />
      ) : (
        <div
          className="!w-[80rem] !h-[35rem]"
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

export default BannerDetailComponent;
