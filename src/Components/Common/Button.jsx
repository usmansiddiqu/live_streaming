import React from "react";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate("/membership_plan");
  };
  return (
    <>
      <button
        className={props.className}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="w-[120px] h-[35px] flex justify-evenly items-center"
          style={{ margin: "auto" }}
          onClick={props?.onClick || handleCLick}
        >
          <img
            src={props.src}
            alt=""
            className="w-[18px] h-[18px] img-icon"
            style={{ borderRadius: "0px" }}
          />
          <span className="text-btnn">{props.text}</span>
        </div>
      </button>
    </>
  );
}

export default Button;
