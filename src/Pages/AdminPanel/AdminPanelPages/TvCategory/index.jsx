import React from "react";
import TVCategoryTable from "../../../../Components/TVCategoryTable";

function TVCategory() {
  return (
    <>
      <div
        style={{
          background: "black",
          position: "absolute",
          left: "14%",
          width: "85vw",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <TVCategoryTable />
      </div>
    </>
  );
}

export default TVCategory;
