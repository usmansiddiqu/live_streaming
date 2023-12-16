import React from "react";
import { useMediaQuery } from "react-responsive";
function AnotherTeamIcons({ iconsData }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1001px)" });
  return (
    <>
 {isDekstop
  &&      <div className="flex justify-between ">
  {iconsData.map((icon, index) => (
    <div key={index} className=" flex flex-col items-center">
      <img
        src={icon.iconUrl}
        alt={icon.name}
        style={{ width: "40px", height: "40px" }}
        className="team-iconss"
      />
      <p className="">{icon.name}</p>
    </div>
  ))}
</div>
 }
 {isTabletOrMobile &&      <div
        className="  px-2"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {iconsData.map((icon, index) => (
          <div key={index} className="flex flex-col items-center team-img pl-2">
            <img
              src={icon.iconUrl}
              alt={icon.name}
              style={{ width: "35px", height: "35px" }}
              className="team-icons"
            />
            <p className="text-sm text-white font-medium team-p">{icon.name}</p>
          </div>
        ))}
      </div>}
    </>
  );
}

export default AnotherTeamIcons;
