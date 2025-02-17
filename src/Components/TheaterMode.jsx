import React, { useEffect, useState } from "react";
import "../Assets/styles/CardDetailss.scss";
import axios from "axios";
import LiveChat from "./ChatSection";
import ClapprPlayer from "./Common/ClapprPlayer";
import { useParams } from "react-router-dom";
import moment from "moment";
import DetailsIcon from "./Common/DetailsIcon";
import "../Assets/styles/DetailComponent.scss";

function TheaterMode({ data, url, setTheaterMode }) {
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
    <div className="flex !justify-center chat-mbl-box h-[90vh] w-[100vw]">
      <div className="flex w-[100%] w-[100%]  chat-responsive">
        <div className=" w-[100%] h-[100%] chat-respomsive-box">
          {isTimeWithinRange ? (
            <div
              className=" flex h-full live-chat-container"
              style={{ width: "100%", height: "100%" }}
            >
              <ClapprPlayer url={url} />
            </div>
          ) : (
            <div
              className="w-[100%] h-[90vh]  deatil-container live-deatil-container"
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
              <div className="w-[100%] h-[100%] flex justify-between items-center">
                <div className="mt-[-80px] w-[100%]">
                  <DetailsIcon
                    iconsData={[
                      {
                        iconUrl: data.competitors1_logo?.includes("https") ? data.competitors1_logo : `${baseURL}${data.competitors1_logo}`,
                        name: data.competitors1_name,
                      },
                      {
                        iconUrl: data.competitors2_logo?.includes("https") ? data.competitors2_logo : `${baseURL}${data.competitors2_logo}`,
                        name: data.competitors2_name,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-[25%] h-[100%] mb-1 live-chat-responsive  live-chat-responsive1 p-1 bg-[#251947] ">
          <LiveChat setTheaterMode={setTheaterMode} />
        </div>
      </div>
    </div>
  );
}

export default TheaterMode;
