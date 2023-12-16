import React from "react";
import { useMediaQuery } from "react-responsive";

function TeamIcons({ iconsData }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1001px)" });
const isTablet = useMediaQuery({ query: "(min-width: 501px) and (max-width: 1000px)" });
const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <>
    {isDesktop
      &&   <div
      className="flex justify-between  px-3 " style={{marginTop:'-10px'}}
     >
       {iconsData.map((icon, index) => (
         <div key={index} className="flex flex-col items-center">
           <img
             src={icon.iconUrl}
             alt={icon.name}
             style={{ width: "40px", height: "45px" }}
             className="tem-icons"
           />
           <p className="text-sm text-white font-medium tem-p"> {truncateText(icon.name, 7)}</p>
         </div>
       ))}
     </div>
    }
      {isTablet
      &&   <div
      className="flex justify-between " style={{marginTop:'-20px'}}
     >
       {iconsData.map((icon, index) => (
         <div key={index} className="flex flex-col items-center">
           <img
             src={icon.iconUrl}
             alt={icon.name}
             style={{ width: "35px", height: "35px" }}
             className="tem-icons"
           />
           <p className="text-sm text-white font-medium tem-p"> {truncateText(icon.name, 7)}</p>
         </div>
       ))}
     </div>
    }
     {isMobile
      &&   <div
      className="flex justify-between px-2 " style={{marginTop:'-15px'}}
     >
       {iconsData.map((icon, index) => (
         <div key={index} className="flex flex-col items-center">
           <img
             src={icon.iconUrl}
             alt={icon.name}
             style={{ width: "37px", height: "37px" }}
             className="tem-icons"
           />
           <p className="text-sm text-white font-medium tem-p"> {truncateText(icon.name, 7)}</p>
         </div>
       ))}
     </div>
    }
    </>
  );
}

export default TeamIcons;
