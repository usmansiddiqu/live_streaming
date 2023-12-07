import React from "react";
import { useNavigate } from "react-router-dom";

function SliderHeader(props) {
  const navigate = useNavigate();
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
          onClick={() => navigate(`/${props.link}`)}
          className="font-bold cursor-pointer"
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
