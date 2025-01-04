import React, { useEffect } from "react";
import Clappr from "@clappr/player";
import { MediaControl } from "@clappr/plugins";
import TrialTimer from "../../Pages/DetailsPage/TrialTimer";
import { useSelector } from "react-redux";

function ClapprPlayer({ url }) {
  const showTrialTag = useSelector((state) => state.auth.showTrialTag);

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
      mute: false,
      autoPlay: true,
      events: {
        onReady: function () {
          // Adjust the positioning of controls
          // const controls = document.querySelector(".media-control");
          // controls.style.right = "100px"; // You can adjust this value as needed
        },
      },

      plugins: [
        MediaControl.MainPlugin,
        MediaControl.PlayPauseButtonPlugin,
        MediaControl.VolumePlugin,
        MediaControl.FullscreenButtonPlugin,
        MediaControl.SeekBarPlugin,
        MediaControl.TimeIndicatorPlugin,
      ],
      // mediaControl: {
      //   disableBeforeVideoStarts: false,
      //   layersQuantity: 1,
      //   layersConfig: [
      //     {
      //       id: 1,
      //       sectionsQuantity: 1,
      //       flexDirection: "column",
      //       sectionsConfig: [
      //         {
      //           id: 1,
      //           separator: true,
      //           height: height.toString(),
      //           width: width.toString(),
      //           alignItems: "stretch",
      //           justifyContent: "flex-start",
      //           flexGrow: 0,
      //         },
      //       ],
      //     },
      //   ],
      // },
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
  }, [url]);

  return (
    <div className="relative w-full bg-black">
      {/* Video Player */}
      <div id="videoPlayer" className="w-full h-full"></div>

      {/* Overlay: Trial Timer */}
      {showTrialTag && (
        <div className="absolute top-1 right-1 z-10">
          <TrialTimer />
        </div>
      )}
    </div>
  );
}

export default ClapprPlayer;
