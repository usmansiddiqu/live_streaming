// Message.js
import React, { useEffect, useRef, useState } from "react";
import Dots from "../Assets/Icons/dots.png";
import deleteMessage from "../api/deleteMessage";
import blockUser from "../api/blockUser";
const getMessageTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
// TimeAgo.addDefaultLocale(en);
// TimeAgo.addLocale(ru);

const Message = ({ msg, index, isMod, messages, setMessages }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openActionBoxIndex, setOpenActionBoxIndex] = useState(false);
  const actionBoxRef = useRef(null);

  // const toggleVisibility = (e) => {
  //   e.stopPropagation();
  //   setIsVisible(!isVisible);
  //   setOpenActionBoxIndex(index);
  // };

  const handleToggleActionBox = () => {
    if (openActionBoxIndex === index && isVisible) {
      setIsVisible(false);
      setOpenActionBoxIndex(null);
    } else {
      setIsVisible(true);
      setOpenActionBoxIndex(index);
    }
  };
  const currentTime = getMessageTime();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (actionBoxRef.current && !actionBoxRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const deleteChat = async () => {
    try {
      const response = await deleteMessage(msg._id);
      let array = [...messages];
      array.splice(index, 1);
      console.log(array);
      setMessages(array);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const blockUserByUserId = async () => {
    try {
      const response = await blockUser({ userId: msg?.userId?._id });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <p
      className={`flex  p-1 justify-between w-[100%] msg-actions ${
        index % 2 === 0 ? "even-msg" : ""
      }`}
      style={{
        background: index % 2 === 0 ? "#1b1b1b" : "#3f3f3f",
        overflow: "visible",
      }}
    >
      <div className="flex p-1 w-[100%]">
        <div className=" h-[30px] mr-1">
          <img
            src="https://source.unsplash.com/random/person"
            alt=""
            className="w-[25px] h-[25px]"
          />
        </div>
        <div className="flex  w-[90%]">
          <span
            className="font-medium text-sm  "
            style={{
              color: msg.color,
              minWidth: "60px",
              maxWidth: "120px",
              wordWrap: "break-word",
              overflow: "hidden",
            }}
          >
            {msg.userId.name} : ${isMod ? "hehehe" : "nonono"}
          </span>
          <div className="flex justify-between" style={{ width: "70%" }}>
            <span
              className="text-white ml-2 msg-text text-sm"
              style={{
                wordWrap: "break-word",
                overflow: "hidden",
              }}
            >
              {msg.message}
            </span>
          </div>
        </div>
        <div>
          <span className="text-white flex jusitfy-end items-end text-xs relative">
            {/* <ReactTimeAgo date={currentTime} locale="en-US" /> */}
          </span>
          <div className="relative" ref={actionBoxRef}>
            <button
              className="relative action-dot"
              onClick={handleToggleActionBox}
            >
              <img src={Dots} alt="" className="w-[20px]" />
            </button>
            {isVisible && openActionBoxIndex === index && (
              <div
                className="absolute w-[70px] h-[70px] border border-white flex flex-column action-box bg-[#0D0624] "
                style={{ zIndex: "999", left: "-350%" }}
              >
                <span
                  onClick={() => {
                    blockUserByUserId();
                  }}
                  className="border p-1 h-[50%] w-[100%] cursor-pointer text-white"
                >
                  Block
                </span>
                <span
                  onClick={() => {
                    deleteChat();
                  }}
                  className="border p-1 h-[50%] w-[100%] cursor-pointer text-white"
                >
                  Delete
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </p>
  );
};

export default Message;
