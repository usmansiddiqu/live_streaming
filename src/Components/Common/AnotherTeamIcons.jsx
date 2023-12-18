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
    <div key={index} className=" flex flex-col items-center px-6">
      <img
        src={icon.iconUrl}
        alt={icon.name}
        style={{ width: "60px", height: "60px" ,marginTop:'-10px' }}
        className="team-iconss"
      />
      <p className="text-sm text-white font-medium text-white">{icon.name}</p>
    </div>
  ))}
</div>
 }
 {isTabletOrMobile &&      <div
        className="  px-3"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {iconsData.map((icon, index) => (
          <div key={index} className="flex flex-col items-center team-img pl-2 ">
            <img
              src={icon.iconUrl}
              alt={icon.name}
              style={{ width: "50px", height: "50px" }}
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
