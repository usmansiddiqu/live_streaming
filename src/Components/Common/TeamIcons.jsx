import React from "react";

function TeamIcons({ iconsData }) {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <>
      <div
        className="tem-img-box "
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
            <p className="text-sm text-white font-medium tem-p"> {truncateText(icon.name, 7)}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamIcons;
