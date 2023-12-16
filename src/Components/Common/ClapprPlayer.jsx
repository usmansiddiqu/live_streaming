import React, { useEffect } from "react";
import Clappr from "@clappr/player";

function ClapprPlayer({ url, setShow }) {
  console.log(url);

  useEffect(() => {
    // Function to calculate player size based on screen width
    const calculatePlayerSize = () => {
      const screenWidth = window.innerWidth;
      const scaleFactor = screenWidth < 768 ? 0.99 : 0.7; // Further reduced scaling factor
      const playerWidth = screenWidth * scaleFactor;
      const playerHeight = (9 / 16) * playerWidth; // 16:9 aspect ratio

      return { width: playerWidth, height: playerHeight };
    };

    const { width, height } = calculatePlayerSize();

    const player = new Clappr.Player({
      source: url,
      parentId: "#videoPlayer",
      width: width.toString(),
      height: height.toString(),
      mute: true,
      events: {
        onReady: function () {
          setShow(true);
          console.log("ready");

          // Adjust the positioning of controls
          const controls = document.querySelector(".media-control");
          controls.style.right = "100px"; // You can adjust this value as needed
        },
      },
    });

    // Handle window resize
    const handleResize = () => {
      const { width, height } = calculatePlayerSize();
      player.resize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Clean up when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      player.destroy();
    };
  }, [url, setShow]);

  return <div className="w-full" id="videoPlayer"></div>;
}

export default ClapprPlayer;
