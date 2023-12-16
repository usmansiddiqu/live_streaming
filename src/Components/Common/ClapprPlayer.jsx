import React, { useEffect } from "react";
import Clappr from "@clappr/player";
function ClapprPlayer({ url, setShow }) {
  console.log(url);
  useEffect(() => {
    const player = new Clappr.Player({
      source: url,
      parentId: "#videoPlayer",
      width: "300",
      height: "300",
      mute: true,
      events: {
        onReady: function () {
          setShow(true);
          console.log("ready");
        },
      },
      //   autoPlay: true,
      //   with: "500px",
      //   height: "200px",
      // Other configuration options
    });

    return () => player.destroy();
  }, []);
  return <div></div>;
}

export default ClapprPlayer;
