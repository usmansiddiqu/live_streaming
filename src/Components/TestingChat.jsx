import React, { useEffect, useState } from "react";
import "../Assets/styles/CardDetailss.scss";
import axios from "axios";
import LiveChat from "./NameLiveChat";
import ClapprPlayer from "./Common/ClapprPlayer";

function TestingChat({ data, url }) {
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
    <div className="flex !justify-center chat-mbl-box">
      <div className="flex w-[94%] mx-auto chat-responsive">
        <div className=" mt-2 flex h-full  palyer-mbl">
          <ClapprPlayer url={url} />
        </div>
        <div className="w-[55%] h-[99%] mt-2 live-chat-responsive p-1 bg-[#251947]">
          <LiveChat />
        </div>
      </div>
    </div>
  );
}

export default TestingChat;
