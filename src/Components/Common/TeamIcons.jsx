import React from "react";

function TeamIcons({ iconsData }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {iconsData.map((icon, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={icon.iconUrl}
            alt={icon.name}
            style={{ width: "44px", height: "44px" }}
          />
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamIcons;
