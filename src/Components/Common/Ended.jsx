import React from "react";
import moment from "moment-timezone";

function Ended({ show }) {
  if (!show) {
    return null;
  }

  const eventTimeUTC = moment(show).utc();
  const currentTimeLocal = moment();

  const showEnded = currentTimeLocal.isAfter(
    eventTimeUTC.clone().add(4, "hours")
  );

<<<<<<< Updated upstream
=======
  const isBetween = currentTimeLocal.isBetween(
    eventTimeUTC,
    eventTimeUTC.clone().add(4, "hours")
  );
  if (isBetween) {
    return (
      <div className="absolute z-40 live w-[14vw]  mx-auto ">
        <div
          className="bg-white rounded-lg  text-white flex justify-evenly items-center "
          style={{ fontSize: "10px", height: "15px", width: "40px" }}
        >
          <div className="circular-div w-[6px] h-[6px] "></div>
          <span className="text-black" style={{ fontSize: "11px" }}>
            LIVE
          </span>
        </div>
      </div>
    );
  }
>>>>>>> Stashed changes
  return (
    <>
      {showEnded && (
        <>
<<<<<<< Updated upstream
          <div className="relative z-40 live ">
            <div
              className="bg-red-600 rounded-lg  text-white mx-auto  flex justify-evenly items-center "
              style={{
                fontSize: "10px",
                height: "15px",
                width: "40px",
              }}
            >
              <span className="text-white my-auto" style={{ fontSize: "11px" }}>
                Ended
              </span>
            </div>
          </div>
          {/* <div className="relative z-40 live ">
            <div
              className="bg-white rounded-lg  text-white mx-auto  flex justify-evenly items-center "
              style={{
                fontSize: "10px",
                height: "15px",
                width: "40px",
              }}
            >
              <div className="circular-div w-[6px] h-[6px] "></div>
              <span
                className="text-black my-auto "
                style={{ fontSize: "11px" }}
              >
                LIVE
              </span>
            </div>
          </div> */}
=======
          <div className="absolute z-40 ended text-center  ">
            <span
              className="bg-red-600 rounded-md p-1 px-1 text-white"
              style={{ fontSize: "10px" }}
            >
              Ended
            </span>
          </div>
>>>>>>> Stashed changes
        </>
      )}
    </>
  );
}

export default Ended;
