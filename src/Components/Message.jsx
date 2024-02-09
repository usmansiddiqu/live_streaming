// Message.js
import React, { useEffect, useRef, useState } from "react";
import Dots from "../Assets/Icons/dots.png";
import deleteMessage from "../api/deleteMessage";
import blockUser from "../api/blockUser";
import { url } from "../helper/url";
import avatar from "../Assets/Icons/person.png";
import Mod from "../Assets/Icons/mod.png";
import { formatDistanceStrict } from "date-fns";
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
  const isLastMessage = index === messages.length - 1;
  let data = localStorage.getItem("data");
  if (data) {
    data = JSON.parse(data)._id;
  }
  const getRandomColor = () => {
    const colors = [
      "#A5F700",
      "#F766AE",
      "#F4F518",
      "#B93EB9",
      "#05CEF2",
      "#F6A71B",
      "#F6781D",
    ];
    return colors[index % 6];
  };
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
      await deleteMessage(msg._id);
      setIsVisible(false);
    } catch (error) {
      setIsVisible(false);
    }
  };
  const blockUserByUserId = async () => {
    try {
      await blockUser({ userId: msg?.userId?._id });
      setIsVisible(false);
    } catch (error) {
      setIsVisible(false);
    }
  };
  const isGoogleImageUrl = (url) => {
    const googleImageUrlRegex =
      /^https:\/\/lh3\.googleusercontent\.com\/.+=[sS]\d+(-c)?$/;
    return googleImageUrlRegex.test(url);
  };
  const getTime = (messageDate) => {
    const result = formatDistanceStrict(new Date(messageDate), new Date());
    return result;
    console.log(result);
  };
  return (
    <p
      className={`flex  p-1 justify-between w-[100%] msg-actions ${
        index % 2 === 0 ? "even-msg" : ""
      }`}
      style={{
        background: index % 2 === 0 ? "#1b1b1b" : "#3f3f3f",
        overflow: "visible",
        flexDirection: "column",
      }}
    >
      <div className="flex p-1 w-[100%] items-center">
        <div className=" h-[30px] w-[30px] mr-1" style={{ marginTop: "2px" }}>
          <img
            src={
              msg?.userId?.image
                ? isGoogleImageUrl(msg?.userId?.image)
                  ? msg?.userId?.image
                  : url +
                    "\\" +
                    msg?.userId?.image
                      .replace("uploads\\", "")
                      .replace("uploads/", "")
                : avatar
            }
            alt=""
            className="w-[25px] h-[25px]"
          />
        </div>
        <div className="flex items-center w-[85%] mbl-chat ">
          {msg?.userId?.isMod ? (
            <div className="w-[15px] h-[15px]">
              <img src={Mod} alt="" />
            </div>
          ) : (
            <div></div>
          )}
          <span
            className="font-medium mbl-chat-font border"
            style={{
              // width: "80px",
              maxWidth: "120px",
              wordWrap: "break-word",
              overflow: "hidden",
              color: getRandomColor(),
              marginLeft: "2px",
              fontSize: "13px",
            }}
          >
            {msg.userId.name} :
          </span>

          <div className="flex justify-between border" style={{ width: "70%" }}>
            <span
              className="text-white ml-2 msg-text"
              style={{
                wordWrap: "break-word",
                overflow: "hidden",
                fontSize: "13px",
              }}
            >
              {msg.message}
            </span>
          </div>
        </div>
        <div>
          {/* <span className="text-white flex jusitfy-end items-end text-xs relative">
            {getTime(msg.createdAt)}
          </span> */}
          <div className="relative" ref={actionBoxRef}>
            {msg?.userId._id != data && (
              <button
                className="relative action-dot"
                onClick={handleToggleActionBox}
              >
                <img src={Dots} alt="" className="w-[20px]" />
              </button>
            )}

            {isVisible && openActionBoxIndex === index && (
              <div
                className="absolute w-[100px] h-auto border border-white flex flex-column action-box  bg-[#251947]"
                style={{
                  zIndex: "999",
                  left: "-430%",
                  top: isLastMessage ? "-320%" : "",
                  boxShadow: "1px 2px 9px 3px rgba(0,0,0,0.62)",
                }}
              >
                <span
                  className="border p-2 h-[50%] w-[100%] cursor-pointer px-2 text-white action-hover action-box1"
                  onClick={blockUserByUserId}
                >
                  Block
                </span>
                {isMod ? (
                  <span
                    onClick={deleteChat}
                    className="border p-2 h-[50%] w-[100%] cursor-pointer px-2 text-white action-hover action-box2 "
                  >
                    Delete
                  </span>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <span
        className="text-white flex text-xs text-right relative w-[80px]"
        style={{
          textAlign: "right",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        {getTime(msg.createdAt)}
      </span>
    </p>
  );
};

export default Message;
