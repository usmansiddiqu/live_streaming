// Message.js
import React from "react";

const getMessageTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

const Message = ({ msg, index }) => {
  const currentTime = getMessageTime();
  return (
    <p
      className={`flex  p-1 ${index % 2 === 0 ? "even-msg" : ""}`}
      style={{ background: index % 2 === 0 ? "#1b1b1b" : "#3f3f3f" }}
    >
      <div className="w-[30px] h-[30px] mr-1">
        <img
          src="https://source.unsplash.com/random/person"
          alt=""
          className="w-[25px] h-[25px]"
        />
      </div>
      <div className="flex">
        <span
          className="font-medium text-sm"
          style={{ color: msg.color, minWidth: "50px" }}
        >
          Daud :
        </span>
        <div className="flex justify-between">
          <span
            className="text-white ml-2 msg-text text-sm "
            style={{
              width: "300px",
              wordWrap: "break-word",
              overflow: "hidden",
            }}
          >
            {msg.text}
          </span>
          <span className="text-gray-500 flex jusitfy-end text-xs relative time">
            {currentTime}
          </span>
        </div>
      </div>
    </p>
  );
};

export default Message;
