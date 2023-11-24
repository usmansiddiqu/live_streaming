import React from "react";

function DetailsIcon({ iconsData }) {
  return (
    <div className="flex !justify-between pt-20  px-16 items-center">
      {iconsData.map((icon, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={icon.iconUrl}
            alt={icon.name}
            // style={{ width: "44px", height: "44px" }}
            className="w-80 h-80"
          />
        </div>
      ))}
    </div>
  );
}

export default DetailsIcon;
