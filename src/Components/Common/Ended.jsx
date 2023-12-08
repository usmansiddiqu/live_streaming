import React from "react";

function Ended({ show }) {
  return (
    <>
      {show && (
        <div
          className="absolute z-40 ended w-[14vw] ended text-center"
          style={{ marginTop: "-50px" }}
        >
          <span className="bg-red-600 rounded-md p-1 px-3 text-xs text-white">
            Ended
          </span>
        </div>
      )}
    </>
  );
}

export default Ended;
