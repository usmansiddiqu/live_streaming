import React from "react";

function SliderHeader(props) {
  return (
    <div
      style={{
        width: "63%",
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        alignItems: "center",
        marginTop: "25px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "24px" }}>{props.title}</h1>
      <span>
        <a
          href=""
          style={{
            textDecoration: "none",
            color: "blue",
            fontSize: "16px",
          }}
        >
          View All
        </a>
      </span>
    </div>
  );
}

export default SliderHeader;
