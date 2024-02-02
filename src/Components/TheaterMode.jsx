import React, { useEffect, useState } from "react";
import "../Assets/styles/CardDetailss.scss";
import axios from "axios";
import LiveChat from "./ChatSection";
import ClapprPlayer from "./Common/ClapprPlayer";

function TheaterMode({ data, url }) {
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
    <div className="flex !justify-center chat-mbl-box h-[100%]">
      <div className="flex w-[94%] mx-auto chat-responsive">
        <div className="">
          <ClapprPlayer
            url={"https://main.fhdsports.live:443/hdstreamlive/hdembed/3.m3u8"}
          />
        </div>
        <div
          className="w-[55%] h-[99%] mb-1 live-chat-responsive p-1 bg-[#251947]"
          // style={{ marginTop: "8px" }}
        >
          <LiveChat />
        </div>
      </div>
    </div>
  );
}

export default TheaterMode;
