import React from "react";

function AnotherTeamIcons({ iconsData }) {
  return (
    <>
      <div
        className="team-img-box  px-3 "
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {iconsData.map((icon, index) => (
          <div key={index} className="flex flex-col items-center team-img ">
            <img
              src={icon.iconUrl}
              alt={icon.name}
              style={{ width: "35px", height: "35px" }}
              className="team-icons"
            />
            <p className="text-sm text-white font-medium team-p">{icon.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AnotherTeamIcons;
