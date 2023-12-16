import React, { useEffect } from "react";
import Clappr from "@clappr/player";
function ClapprPlayer({ url, setShow }) {
  console.log(url);
  useEffect(() => {
    const player = new Clappr.Player({
      source: url,
      parentId: "#videoPlayer",
      //   width: "100%", // Adjusted for responsiveness
      //   height: "56.25vw", // 16:9 aspect ratio
      mute: true,
      events: {
        onReady: function () {
          setShow(true);
          console.log("ready");
        },
      },
    });

    return () => player.destroy();
  }, []);
  return <div className="w-full" id="videoPlayer"></div>;
}

export default ClapprPlayer;
