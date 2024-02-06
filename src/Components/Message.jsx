// Message.js
import React, { useEffect, useState } from "react";

const getMessageTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
// TimeAgo.addDefaultLocale(en);
// TimeAgo.addLocale(ru);

const Message = ({ msg, index, isMod }) => {
  const currentTime = getMessageTime();

  return (
    <p
      className={`flex  p-1 justify-between w-[100%] ${
        index % 2 === 0 ? "even-msg" : ""
      }`}
      style={{ background: index % 2 === 0 ? "#1b1b1b" : "#3f3f3f" }}
    >
      <div className="flex p-1 w-[100%]">
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
            {msg.userId.name} : ${isMod ? "hehehe" : "nonono"}
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
              {msg.message}
            </span>
          </div>
        </div>
      </div>
      <span className="text-white flex jusitfy-end items-end text-xs relative">
        {/* <ReactTimeAgo date={currentTime} locale="en-US" /> */}
      </span>
    </p>
  );
};

export default Message;
