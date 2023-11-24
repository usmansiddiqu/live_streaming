import React from "react";
import TVChannelTable from "../../../../Components/TVChannelTable";

function TVChannel() {
  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        left: "14%",
        width: "85vw",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <TVChannelTable />
    </div>
  );
}

export default TVChannel;
