import React, { useState, useEffect, useRef } from "react";
import { MentionsInput, Mention } from "react-mentions";
import EmojiPicker from "emoji-picker-react";
import Send from "../Assets/Icons/send-package.png";
import Emoji from "../Assets/Icons/emoji.png";
import Message from "./Message";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const LiveChat = () => {
  const users = [
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "emmanuel@nobody.com",
    },
  ];
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [mentionData, setMentionData] = useState([]);

  const handleEmojiClick = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setNewMessage((prevMessage) => prevMessage + emoji);
    setShowEmojiPicker(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: newMessage, emoji: "😊", color: getRandomColor() },
      ]);
      setNewMessage("");
    }
  };
  const mentionStyle = {
    width: "100%",
    height: "30px",
    // paddingLeft: "5px",
    color: "white",
    border: "1px solid white",
    borderRadius: "25px",
    control: {
      fontSize: 12,
      fontWeight: "normal",
      border: "1px solid white",
    },

    highlighter: {
      overflow: "hidden",
    },

    input: {
      margin: 0,

      border: "1px solid white",
    },

    "&singleLine": {
      control: {
        display: "inline-block",
        width: 130,
      },

      highlighter: {
        padding: 1,
        border: "none",
      },

      input: {
        padding: 1,
        color: "black",
        // outline: "none",
        border: "1px solid white",
      },
    },

    "&multiLine": {
      control: {
        fontFamily: "monospace",
        height: 30,
      },

      highlighter: {
        padding: 9,
        height: 30,
      },

      input: {
        padding: 9,
        outline: 0,
        border: 0,
        height: 30,
        left: "unset",
        position: "absolute",
        bottom: 14,
        lineHeight: 1,
        outline: "none",
        focus: {
          ring: 0,
        },
      },
    },

    suggestions: {
      top: "unset",
      bottom: "25px",
      zIndex: 99,
      maxHeight: "90px",
      overflow: "auto",
      list: {
        backgroundColor: "#0D0620",
        border: "1px solid white",
        fontSize: 10,
      },

      item: {
        padding: "5px 15px",
        borderBottom: "1px solid white",

        "&focused": {
          backgroundColor: "none",
          outline: "none",
          focus: {
            ring: 0,
          },
        },
      },
    },
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    const chatScroll = document.querySelector(".chat-scroll");
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }, [messages]);

  return (
    <>
      <div className="mx-auto p-1 h-[100%] ">
        <div className="  relative " style={{ height: "100%" }}>
          <div
            className="chat-bar"
            style={{
              height: "89%",
              overflowY: "auto",
            }}
          >
            <div
              className="mb-1 overflow-y-auto chat-scroll"
              style={{ maxHeight: "78%", overflowY: "hidden" }}
            >
              {messages.map((msg, index) => (
                <Message key={index} msg={msg} index={index} />
              ))}
            </div>
          </div>
          <div
            className="flex flex-column  absolute w-[100%] px-2 h-[10%]"
            style={{ bottom: "0" }}
          >
            <div
              className="flex items-center w-[6.8rem] mb-2 bg-[#4949FA]"
              style={{
                boxShadow: "-2px 4px 13px -1px rgba(0,0,0,0.67)",
                borderRadius: "10px",
              }}
            >
              <div className="w-[6px] h-[6px] bg-[#00c22a] rounded-full  ml-2"></div>
              <span className="text-white text-sm ml-2">
                Online <span>358</span>
              </span>
            </div>
            <div
              className="flex border border-0 rounded-full  items-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="w-[100%] input-1 flex p-1 items-center">
                <MentionsInput
                  value={newMessage}
                  onChange={(e, newValue, plainTextValue, mentions) => {
                    setNewMessage(newValue);
                    setMentionData(mentions);
                  }}
                  onKeyDown={handleKeyDown}
                  style={mentionStyle}
                  placeholder="Type your message"
                  className="!focus:outline-none  !border-0 chat-text-area   !focus:ring-0"
                >
                  <Mention
                    trigger="@"
                    style={{
                      backgroundColor: "rgba(251, 122, 3, 0.15)",
                      marginBottom: "20px",
                    }}
                    data={users}
                    displayTransform={(id) => `@${id}`}
                    // displayTransform={(id, display, type) => `@${display}`}
                  />
                </MentionsInput>
              </div>
              <div className="w-[16%] input-2 flex justify-evenly">
                <div
                  className="relative p-2 cursor-pointer relative bg-[#4949FA] text-white rounded-full mr-2"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <span role="img" aria-label="emoji">
                    <img
                      src={Emoji}
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>
                  {showEmojiPicker && (
                    <div
                      className="emoji-picker absolute w-[15px] h-[15px] "
                      ref={emojiPickerRef}
                      style={{ bottom: "0%", left: "100%" }}
                    >
                      <EmojiPicker
                        onEmojiClick={handleEmojiClick}
                        lazyLoadEmojis={true}
                        searchDisabled={true}
                      />
                    </div>
                  )}
                </div>
                <button
                  className="p-2 bg-[#4949FA] text-white rounded-full"
                  onClick={handleSendMessage}
                >
                  <img
                    src={Send}
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
