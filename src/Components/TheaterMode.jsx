import React, { useEffect, useState } from "react";
import "../Assets/styles/CardDetailss.scss";
import axios from "axios";
import LiveChat from "./ChatSection";
import ClapprPlayer from "./Common/ClapprPlayer";
import { useParams } from "react-router-dom";
import moment from "moment";
import DetailsIcon from "./Common/DetailsIcon";

function TheaterMode({ data, url, setTheaterMode }) {
  const { type } = useParams();
  const currentTime = moment();
  const eventTime = moment(data?.data?.date).utc();

  const isTimeWithinRange =
    data?.data?.date &&
    currentTime.isBetween(
      eventTime.clone().subtract(15, "minutes"),
      eventTime
        .clone()
        .add(
          type == "NBA" ? 2.6 : type == "NHL" ? 3 : type == "MLB" ? 3 : 3.5,
          "hours"
        )
    );

  return (
    <div className="flex !justify-center chat-mbl-box h-[90vh] w-[100vw]">
      <div className="flex w-[100%] w-[100%]  chat-responsive">
        <div className=" w-[100%]">
          {isTimeWithinRange ? (
            <div className=" flex h-full" style={{ width: "100%" }}>
              <ClapprPlayer url={url} />
            </div>
          ) : (
            <div
              className="w-[100%] h-[90vh]  deatil-container live-deatil-container"
              style={{
                background: `linear-gradient(-60deg, #${
                  data?.data?.competitors?.filter(
                    (comp) => comp.homeAway == "home"
                  )[0].color === "ffffff"
                    ? "808080"
                    : data?.data?.competitors?.filter(
                        (comp) => comp.homeAway == "home"
                      )[0].color
                } 50%, #${
                  data?.data?.competitors?.filter(
                    (comp) => comp.homeAway == "home"
                  )[0].alternateColor === "ffffff"
                    ? "808080"
                    : data?.data?.competitors?.filter(
                        (comp) => comp.homeAway == "home"
                      )[0].alternateColor
                } 50%)`,
              }}
            >
              <div className="w-[100%] h-[100%] flex justify-evenly items-center">
                <div className="mt-[-80px]">
                  <DetailsIcon
                    iconsData={data?.data?.competitors?.map((comp) => ({
                      iconUrl: comp.logo,
                      name: comp.name,
                    }))}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="w-[25%] h-[100%] mb-1 live-chat-responsive  live-chat-responsive1 p-1 bg-[#251947] "
          style={{ marginTop: "0px" }}
        >
          <LiveChat setTheaterMode={setTheaterMode} />
        </div>
      </div>
    </div>
  );
}

export default TheaterMode;
