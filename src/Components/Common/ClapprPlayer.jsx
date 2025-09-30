import React, { useEffect, useState } from "react";
import Clappr from "@clappr/player";
import { MediaControl } from "@clappr/plugins";

function ClapprPlayer({ url }) {
  const [player, setPlayer] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [userInteracted, setUserInteracted] = useState(false); // Track if user interacted

  // Function to calculate player size dynamically
  const calculatePlayerSize = () => {
    const screenWidth = window.innerWidth;
    const scaleFactor = screenWidth < 768 ? 0.99 : 0.7;
    const playerWidth = screenWidth * scaleFactor;
    const playerHeight = (9 / 16) * playerWidth; // Maintain 16:9 aspect ratio
    return { width: playerWidth, height: playerHeight };
  };

  // useEffect(() => {
  //   const { width, height } = calculatePlayerSize();

  //   // Destroy old player if exists
  //   if (player) {
  //     player.destroy();
  //   }

  //   // Create new Clappr player
  //   const newPlayer = new Clappr.Player({
  //     source: url,
  //     parentId: "#videoPlayer",
  //     width: width.toString(),
  //     height: height.toString(),
  //     mute: false,
  //     autoPlay: true,
  //     playsinline: true,
  //     useNativeFullscreen: true,
  //     fullscreenEnabled: true,

  //     events: {
  //       onReady: function () {
  //         console.log("Player is ready!");
  //       },
  //       onPlay: function () {
  //         setUserInteracted(true); // Mark user has interacted
  //       },
  //     },

  //     plugins: [
  //       MediaControl.MainPlugin,
  //       MediaControl.PlayPauseButtonPlugin,
  //       MediaControl.VolumePlugin,
  //       MediaControl.FullscreenButtonPlugin,
  //       MediaControl.SeekBarPlugin,
  //       MediaControl.TimeIndicatorPlugin,
  //     ],
  //   });

  //   setPlayer(newPlayer);

  //   // Function to request fullscreen after rotation
  //   const handleOrientationChange = () => {
  //     if (
  //       userInteracted && // Only allow fullscreen if user interacted
  //       !document.fullscreenElement &&
  //       !document.webkitFullscreenElement
  //     ) {
  //       const videoContainer = newPlayer.core.el;
  //       if (videoContainer) {
  //         setTimeout(() => {
  //           if (videoContainer.requestFullscreen) {
  //             videoContainer.requestFullscreen().catch((err) => console.warn("Fullscreen error:", err));
  //           } else if (videoContainer.webkitRequestFullscreen) {
  //             videoContainer.webkitRequestFullscreen();
  //           }
  //         }, 500);
  //       }
  //     }
  //   };

  //   // Listen for screen rotation
  //   window.screen.orientation.addEventListener("change", handleOrientationChange);

  //   // Handle window resize
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth); // Trigger re-render
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.screen.orientation.removeEventListener("change", handleOrientationChange);
  //     newPlayer.destroy();
  //   };
  // }, [url, windowSize, userInteracted]);
  useEffect(() => {
    const { width, height } = calculatePlayerSize();

    // Destroy old player if exists
    if (player) {
      player.destroy();
    }

    // Create new Clappr player
    const newPlayer = new Clappr.Player({
      source: url,
      parentId: "#videoPlayer",
      width: width.toString(),
      height: height.toString(),
      mute: false, // Mute to allow autoplay on most browsers
      autoPlay: false,
      playsinline: true, // Required for Safari iOS
      useNativeFullscreen: true, // Use the browser's native fullscreen
      fullscreenEnabled: true, // Enable fullscreen functionality

      events: {
        onReady: function () {
          console.log("Player is ready!");
        },
        onPlay: function () {
          setUserInteracted(true); // Mark user has interacted
        },
        onError: function (error) {
          console.error("Player error:", error); // Log errors for debugging
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
    });

    setPlayer(newPlayer);

    // Handle window resize
    const handleResize = () => {
      const { width: newWidth, height: newHeight } = calculatePlayerSize();
      newPlayer.resize({ width: newWidth, height: newHeight }); // Resize the player directly
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      newPlayer.destroy();
    };
  }, [url]); // Re-run only when the URL changes
  return (
    <div className="relative w-full bg-black">
      {/* Video Player */}
      <div id="videoPlayer" className="w-full h-full"></div>
    </div>
  );
}

export default ClapprPlayer;
