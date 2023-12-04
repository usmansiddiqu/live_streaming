import React from "react";

function SliderHeader(props) {
  return (
    <div
      style={{
        width: "73%",
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        alignItems: "center",
        marginTop: "25px",
      }}
      className="sliderHeader"
    >
      <h1 className="font-medium" style={{ color: "white", fontSize: "24px" }}>
        {props.title}
      </h1>
      <span>
        <a
          className="font-bold"
          style={{
            textDecoration: "none",
            color: "#0474FF",
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
