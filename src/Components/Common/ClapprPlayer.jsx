import React, { useEffect, useState } from "react";
import Clappr from "@clappr/player";
import { useSelector } from "react-redux";
import TrialTimer from "../../Pages/DetailsPage/TrialTimer";
import { MediaControl } from "@clappr/plugins";

function ClapprPlayer({ url }) {
  const showTrialTag = useSelector((state) => state.auth.showTrialTag);
  const [player, setPlayer] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [userInteracted, setUserInteracted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  // Function to calculate player size dynamically
  const calculatePlayerSize = () => {
    const screenWidth = window.innerWidth;
    const scaleFactor = screenWidth < 768 ? 0.99 : 0.7;
    const playerWidth = screenWidth * scaleFactor;
    const playerHeight = (9 / 16) * playerWidth; // Maintain 16:9 aspect ratio
    return { width: playerWidth, height: playerHeight };
  };

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
      mute: true,
      autoPlay: true,
      playsinline: true,
      useNativeFullscreen: true,
      fullscreenEnabled: true,

      events: {
        onReady: function () {
          console.log("Player is ready!");
        },
        onPlay: function () {
          setUserInteracted(true);
          setShowPlayButton(false);
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

    // Handle fullscreen properly on iOS
    const handleOrientationChange = () => {
      if (userInteracted && !document.fullscreenElement && !document.webkitFullscreenElement) {
        const videoElement = newPlayer.core.el.querySelector("video"); // Get the actual video element

        if (videoElement) {
          setTimeout(() => {
            if (videoElement.requestFullscreen) {
              videoElement.requestFullscreen();
            } else if (videoElement.webkitEnterFullscreen) {
              videoElement.webkitEnterFullscreen(); // iOS Safari fullscreen fix
            }
          }, 500);
        }
      }
    };

    // Listen for screen rotation
    window.screen.orientation.addEventListener("change", handleOrientationChange);

    // Handle window resize
    const handleResize = () => {
      setWindowSize(window.innerWidth); // Trigger re-render
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.screen.orientation.removeEventListener("change", handleOrientationChange);
      newPlayer.destroy();
    };
  }, [url, windowSize, userInteracted]); // Re-run when URL, window size, or interaction state changes

  const handleUserInteraction = () => {
    if (player) {
      player.play();
      setUserInteracted(true);
      setShowPlayButton(false);
    }
  };

  return (
    <div className="relative w-full bg-black">
      {/* Video Player */}
      <div id="videoPlayer" className="w-full h-full"></div>

      {/* Overlay: Play Button for iOS */}
      {showPlayButton && (
        <button
          className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50"
          onClick={handleUserInteraction}
        >
          ▶ Tap to Play
        </button>
      )}

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
