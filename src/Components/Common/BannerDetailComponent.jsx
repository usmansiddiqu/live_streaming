import React, { useEffect, useState } from "react";
import "../../Assets/styles/CardDetailss.scss";
import DetailsIcon from "./DetailsIcon";
import VideoPlayer from "./VideoPlayer";
import ClapprPlayer from "./ClapprPlayer";
import axiosInstance from "../../api";
import axios from "axios";
import { url as url1 } from "../../helper/url";
// import LiveChat from "../NameLiveChat";
import "../../Assets/styles/DetailComponent.scss";

function BannerDetailComponent({ data, url }) {
  const [show, setShow] = useState(true);
  // const [videoPlayer, setVideoPlayer] = useState(false);
  // setTimeout(() => setShow(true), 10000);
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setShow(true);
    } catch (error) {
      setShow(false);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);
  return (
    <div className="flex !justify-center clapper-palyer">
      {show ? (
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
          className=" w-[60vw] h-[50vh] watch-img mb-4"
          style={{
            background: `linear-gradient(-60deg, #${
              data?.competitors1_color === "ffffff"
                ? "808080"
                : data?.competitors1_color
            } 50%, #${
              data?.competitors1_alternateColor === "ffffff"
                ? "808080"
                : data?.competitors1_alternateColor
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
          <img
            className="mx-auto watch-img w-[100vw] h-[50vh]"
            src={url1 + "\\" + data?.image?.replace("uploads\\", "")}
          />
          {/* <div className="" style={{ marginTop: "25px" }}>
            <DetailsIcon
              iconsData={data?.data?.competitors?.map((comp) => ({
                iconUrl: comp.logo,
                name: comp.name,
              }))}
            />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default BannerDetailComponent;
