import React from "react";

function Button(props) {
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
          className="w-[6vw] h-[35px] flex justify-evenly items-center"
          style={{ margin: "auto" }}
        >
          <img src={props.src} alt="" className="w-[18px] h-[18px]" />
          <span>{props.text}</span>
        </div>
      </button>
    </>
  );
}

export default Button;
