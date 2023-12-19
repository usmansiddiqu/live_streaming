import React from "react";
import { useMediaQuery } from "react-responsive";

function TeamIconsDetailPage({ iconsData, title }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isDekstop = useMediaQuery({ query: "(min-width: 1001px)" });
  return (
    <>
      {isDekstop && (
        <>
          <div
            className="px-4 py-3 team-icons"
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
                  style={{ width: "60px", height: "58px" }}
                />
              </div>
            ))}
          </div>
          <div
            className="w-[278px] team-names h-[0] bg-gradient-to-r from-[#00C4FF] to-[#0074FF] absolute rounded-b-xl text-center flex justify-center items-center py-1 "
            style={{
              right: "0%",
            }}
          >
            <span className="py-auto text-white font-medium">{title} </span>
          </div>
        </>
      )}
      {isTabletOrMobile && (
        <>
          <div
            className="px-2 pr-6 py-3"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            {iconsData.map((icon, index) => (
              <div key={index} className="flex flex-col items-center  ">
                <img
                  src={icon.iconUrl}
                  alt={icon.name}
                  style={{ width: "55px", height: "55px" }}
                />
              </div>
            ))}
          </div>
          <div
            className="w-[278px] team-namess h-[0] bg-gradient-to-r from-[#00C4FF] to-[#0074FF] absolute rounded-b-xl text-center flex justify-center items-center py-1.5 "
            style={{
              right: "0%",
            }}
          >
            <span className="py-auto text-white font-medium">{title} </span>
          </div>
        </>
      )}
    </>
  );
}

export default TeamIconsDetailPage;
