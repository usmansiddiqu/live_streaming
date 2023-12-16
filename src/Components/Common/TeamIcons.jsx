import React from "react";

function TeamIcons({ iconsData }) {
  return (
    <>
      <div
        className="tem-img-box px-2"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {iconsData.map((icon, index) => (
          <div key={index} className="flex flex-col items-center tem-img">
            <img
              src={icon.iconUrl}
              alt={icon.name}
              style={{ width: "47px", height: "47px" }}
              className="tem-icons"
            />
            <p className="text-sm text-white font-medium tem-p">{icon.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamIcons;
