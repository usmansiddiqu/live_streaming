import React from "react";
import moment from "moment-timezone";

function Ended({ show, type, flag = false }) {
  if (!show) {
    return null;
  }

  const eventTimeUTC = moment(show).utc();
  const currentTimeLocal = moment();

  const showEnded = currentTimeLocal.isAfter(
    eventTimeUTC
      .clone()
      .add(
        type == "NBA" ? 2.6 : type == "NHL" ? 3.5 : type == "MLB" ? 3.5 : 3.5,
        "hours"
      )
  );
  const isWarmup = currentTimeLocal.isBetween(
    eventTimeUTC.clone().subtract(15, "minutes"),
    eventTimeUTC
  );
  const isBetween = currentTimeLocal.isBetween(
    eventTimeUTC,
    eventTimeUTC
      .clone()
      .add(
        type == "NBA" ? 2.6 : type == "NHL" ? 3.5 : type == "MLB" ? 3.5 : 3.5,
        "hours"
      )
  );
  if (isWarmup) {
    return (
      <>
        <div className="relative z-40 live ">
          <div
            className="bg-white rounded-lg  text-white mx-auto  flex justify-evenly items-center "
            style={{
              fontSize: "10px",
              height: "18px",
              width: "50px",
            }}
          >
            <span className="text-black my-auto" style={{ fontSize: "11px" }}>
              Warmup
            </span>
          </div>
        </div>
      </>
    );
  }
  if (isBetween || flag) {
    return (
      <div className="relative z-40 live ">
        <div
          className="bg-white rounded-lg  text-white mx-auto  flex justify-evenly items-center "
          style={{
            fontSize: "10px",
            height: "15px",
            width: "40px",
          }}
        >
          <div className="circular-div w-[6px] h-[6px] "></div>
          <span className="text-black my-auto " style={{ fontSize: "11px" }}>
            LIVE
          </span>
        </div>
      </div>
    );
  }
  return (
    <>
      {showEnded && (
        <>
          <div className="relative z-40 live ">
            <div
              className="bg-red-600 rounded-lg  text-white mx-auto  flex justify-evenly items-center "
              style={{
                fontSize: "10px",
                height: "18px",
                width: "40px",
              }}
            >
              <span className="text-white my-auto" style={{ fontSize: "11px" }}>
                End
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Ended;
