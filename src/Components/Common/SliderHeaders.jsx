import React from "react";

function SliderHeaders(props) {
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
    </div>
  );
}

export default SliderHeaders;
