import React from "react";

function Ended({ show }) {
  return (
    <>
      {show && (
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
