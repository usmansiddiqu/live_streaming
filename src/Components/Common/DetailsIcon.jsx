import React from "react";
import { useMediaQuery } from "react-responsive";
function DetailsIcon({ iconsData }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 601px)" });
  return (
    <>
    {isDekstop && <div className="flex !justify-between px-20  items-center mt-[180px]">
      {iconsData?.map((icon, index) => (
        <div key={index} style={{ textAlign: "center" }} className="px-20">
          <img
            src={icon.iconUrl}
            alt={icon.name}
            // style={{ width: "44px", height: "44px" }}
            className="w-40 h-50"
          />
        </div>
      ))}
    </div>}
    {isTabletOrMobile && <div className="flex !justify-between   items-center mt-[80px]">
      {iconsData?.map((icon, index) => (
        <div key={index} style={{ textAlign: "center" }} className="px-5 ">
          <img
            src={icon.iconUrl}
            alt={icon.name}
            style={{ width: "55px", height: "55px" }}
         
          />
        </div>
      ))}
    </div>}
    </>
  );
}

export default DetailsIcon;
