import React, { useEffect, useState } from "react";
import Clappr from "@clappr/player";
import { useSelector } from "react-redux";
import TrialTimer from "../../Pages/DetailsPage/TrialTimer";
import { MediaControl } from "@clappr/plugins";

function ClapprPlayer({ url }) {
  const showTrialTag = useSelector((state) => state.auth.showTrialTag);
  const [player, setPlayer] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth); // Track window size changes

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
      mute: false,
      autoPlay: true,
      fullscreenEnabled: true,
    });

    setPlayer(newPlayer);

    // Handle window resize
    const handleResize = () => {
      setWindowSize(window.innerWidth); // Trigger re-render
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      newPlayer.destroy();
    };
  }, [url, windowSize]); // Re-run when URL or window size changes

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
