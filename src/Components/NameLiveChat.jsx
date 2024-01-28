import React, { useState, useEffect, useRef } from "react";
import "../Assets/styles/LiveChat.scss";
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
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
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
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // setNewMessage();
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
            style={{
              height: "84.5%",
              overflowY: "hidden",
            }}
          >
            <div
              className="mb-1 overflow-y-auto chat-scroll"
              style={{ maxHeight: "83%", overflowY: "hidden" }}
            >
              {messages.map((msg, index) => (
                <Message key={index} msg={msg} index={index} />
              ))}
            </div>
          </div>
          <div
            className="flex flex-column  absolute w-[100%] px-2 h-[10%] mb-3"
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
              className="flex border rounded-full px-1 items-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="w-[80%] input-1 flex items-center">
                {/* <textarea
                  type="text"
                  className="flex-1 px-2 text-sm border border-white focus:ring-0 focus:outline-none text-white chat-text-area w-full placeholder:text-white placeholder:text-sm"
                  style={{
                    overflowY: "hidden",
                    height: "35px",
                  }}
                  placeholder="Send Your Message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></textarea> */}

                <textarea
                  id="comment"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    overflowY: "hidden",
                    height: "35px",
                    background: "transparent",
                  }}
                  class="w-full flex-1 p-2 text-left !border  px-2 text-sm border border-white focus:outline-none text-white border-0 chat-text-area w-full placeholder:text-white placeholder:text-sm text-sm  focus:ring-0"
                  placeholder="Send Your Message..."
                ></textarea>
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
