import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, setShow }) => {
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        height="100%"
        onReady={() => {
          setShow(true);
        }}
        onEnded={() => console.log("some")}
        onError={() => console.log("errro")}
        config={{
          hlsOptions: {
            // Any additional options for the hls.js library can be added here
            // For example, adding a custom header:
            // xhrSetup: function (xhr, url) {
            //   xhr.setRequestHeader('Custom-Header', 'value');
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
