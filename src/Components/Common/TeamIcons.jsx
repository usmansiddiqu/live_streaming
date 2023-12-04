import React from "react";

function TeamIcons({ iconsData }) {
  return (
    <div
      className="px-5 pr-6"
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      {iconsData.map((icon, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={icon.iconUrl}
            alt={icon.name}
            style={{ width: "35px", height: "35px" }}
          />
          <p className="text-sm text-white font-medium">{icon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamIcons;
