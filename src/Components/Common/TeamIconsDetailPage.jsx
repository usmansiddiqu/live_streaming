import React from "react";

function TeamIconsDetailPage({ iconsData }) {
  return (
    <>
      <div
        className="px-5 pr-6 py-3 team-icons"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        {iconsData.map((icon, index) => (
          <div key={index} className="flex flex-col items-center px-4 ">
            <img
              src={icon.iconUrl}
              alt={icon.name}
              style={{ width: "55px", height: "55px" }}
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
        <span className="py-auto text-white font-medium"> </span>
      </div>
    </>
  );
}

export default TeamIconsDetailPage;
