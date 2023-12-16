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

  return (
    <>
      {showEnded && (
        <div className="absolute z-40 ended w-[14vw] text-center  ">
          <span
            className="bg-red-600 rounded-md p-1 px-1 text-white"
            style={{ fontSize: "10px" }}
          >
            Ended
          </span>
        </div>
      )}
    </>
  );
}

export default Ended;
