import React from "react";

function TeamIcons({ iconsData }) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "0 35px 25px",
      }}
    >
      {iconsData.map((icon, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={icon.iconUrl}
            alt={icon.name}
            style={{ width: "35px", height: "35px" }}
          />
          <p className="text-sm">{icon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamIcons;
