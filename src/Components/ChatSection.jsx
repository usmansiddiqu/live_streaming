import React, { useState, useEffect, useRef, useMemo } from "react";
import { MentionsInput, Mention } from "react-mentions";
import EmojiPicker from "emoji-picker-react";
import Send from "../Assets/Icons/send-package.png";
import Emoji from "../Assets/Icons/emoji.png";
import Message from "./Message";
import "../Assets/styles/LiveChat.scss";
import getChat from "../api/getChat";
import sendMessage from "../api/sendMessage";
import getMessages from "../api/getMessages";
import getUser from "../api/getUsers";
import { useParams } from "react-router";
import { EventSourcePolyfill } from "event-source-polyfill";
import removeUser from "../api/removeUser";
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ChatSection = () => {
  const params = useParams();
  const eventId = params.id;

  const [users, setUsers] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [mentionData, setMentionData] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));

  const [isMod, setIsMod] = useState(
    JSON.parse(localStorage.getItem("data")).isMod
  );

  const sendMessageFunc = async () => {
    try {
      const result = await sendMessage({
        eventId,
        userId: data._id,
        message: newMessage,
      });
      // getMessageFrom();

      // setMessages([...messages, result?.data?.data]);
    } catch (error) {
      console.log(error);
    }
  };
  const [openActionBoxIndex, setOpenActionBoxIndex] = useState(null);

  const toggleActionBox = (index) => {
    setOpenActionBoxIndex(openActionBoxIndex === index ? null : index);
  };
  const handleEmojiClick = (emojiObject) => {
    const emoji = emojiObject.emoji;
    setNewMessage((prevMessage) => prevMessage + emoji);
    setShowEmojiPicker(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      sendMessageFunc();
      console.log(newMessage);

      setNewMessage("");
    }
  };

  const mentionStyle = {
    width: "100%",
    color: "white",
    borderRadius: "25px",
    control: {
      fontSize: 12,
      fontWeight: "normal",
    },

    highlighter: {
      overflow: "hidden",
    },

    input: {
      margin: 0,
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
  const memoizedMessages = useMemo(
    () =>
      messages.map((msg, index) => (
        <Message
          key={index}
          msg={msg}
          index={index}
          isMod={isMod}
          isOpen={openActionBoxIndex === index}
          toggleActionBox={toggleActionBox}
        />
      )),
    [messages]
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // const getMessages = async()=>{
  //   const data = getChat()
  // }
  const getMessageFrom = async () => {
    try {
      const messages = await getMessages(eventId);
      setMessages(messages?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUsers = async () => {
    try {
      const response = await getUser(eventId);
      setOnlineUsers(Object.keys(JSON.parse(response?.data?.data)).length);
      let u = [];
      for (const [key, value] of Object.entries(
        JSON.parse(response?.data?.data)
      )) {
        u.push({
          id: key,
          display: value,
        });
      }
      setUsers(u);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMessageFrom();
    getUsers();

    const ed = new EventSourcePolyfill(
      `http://localhost:4000/backend/chat/stream/${eventId}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
        heartbeatTimeout: 120000,
      }
    );
    ed?.addEventListener("CHAT_CREATED", (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    ed?.addEventListener("CHAT_JOINED", (event) => {
      try {
        let connectedUsers = JSON.parse(event.data);
        connectedUsers = JSON.parse(connectedUsers[params.id]);

        setOnlineUsers(Object.keys(connectedUsers).length);
        // setUsers(Object.entries(JSON.parse(response?.data?.data)));
        let u = [];
        for (const [key, value] of Object.entries(connectedUsers)) {
          u.push({
            id: key,
            display: value,
          });
        }
        setUsers(u);
      } catch (error) {}
    });

    ed?.addEventListener("CHAT_LEFT", (event) => {
      try {
        let connectedUsers = JSON.parse(event.data);
        connectedUsers = connectedUsers[params.id];
        setOnlineUsers(Object.keys(connectedUsers).length);
        // setUsers(Object.entries(JSON.parse(response?.data?.data)));
        let u = [];
        for (const [key, value] of Object.entries(connectedUsers)) {
          u.push({
            id: key,
            display: value,
          });
        }
        setUsers(u);
      } catch (error) {}
    });

    ed?.addEventListener("MOD", (event) => {
      try {
        console.log(123123, JSON.parse(event.data));
        localStorage.setItem("data", event.data);
        window.dispatchEvent(new Event("DATA_UPDATED"));
      } catch (error) {}
    });

    window.addEventListener("DATA_UPDATED", () => {
      const data = JSON.parse(localStorage.getItem("data"));
      setIsMod(data.isMod);
    });

    return () => {
      ed?.close();
      removeUser(params.id);
    };
  }, []);

  useEffect(() => {
    const chatScroll = document.querySelector(".chat-scroll");
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }, [messages]);

  return (
    <>
      <div className="mx-auto p-1 h-[100%] w-[100%]">
        <div className="  relative " style={{ height: "100%" }}>
          <div
            className="chat-bar"
            style={{
              height: "87.5%",
              overflowY: "auto",
              // transform: "rotate(180deg)",
            }}
          >
            <div
              className="mb-1 mt-2 chat-scroll "
              style={{ maxHeight: "78%", overflowY: "visible" }}
            >
              {/* <div style={{ transform: "rotate(180deg)" }}> */}
              <div>{memoizedMessages}</div>
              {/* {messages.map((msg, index) => (
                <Message key={index} msg={msg} index={index} />
              ))} */}
            </div>
          </div>

          <div
            className="flex flex-column  absolute w-[100%] px-2 mb-2 input-box h-[10%] "
            style={{ bottom: "0" }}
          >
            <div
              className="flex"
              style={{
                justifyContent: "flex-end",
              }}
            >
              <div
                className="flex items-center justify-evenly online mb-2 bg-[#4949FA] px-3"
                style={{
                  boxShadow: "-2px 4px 13px -1px rgba(0,0,0,0.67)",
                  borderRadius: "10px",
                }}
              >
                <div className="w-[6px] h-[6px] bg-[#00c22a] rounded-full mr-2"></div>
                <span
                  className="text-white text-sm"
                  style={{ fontSize: "11px" }}
                >
                  Online <span>{onlineUsers}</span>
                </span>
              </div>
            </div>

            <div
              className="flex border border-0 rounded-full  items-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="w-[100%] input-1 flex p-1 items-center">
                <MentionsInput
                  value={newMessage}
                  onChange={(e, newValue, plainTextValue, mentions) => {
                    console.log(123, newValue);
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
                    displayTransform={(id, display) => `@${display}`}
                  />
                </MentionsInput>
              </div>

              <div className="w-[16%] input-2 flex justify-evenly">
                <div
                  className="relative p-2 cursor-pointer relative inputcc bg-[#4949FA] text-white rounded-full mr-2"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <span role="img" aria-label="emoji">
                    <img
                      src={Emoji}
                      className="icon-input"
                      alt=""
                      style={{ width: "20px", height: "20px" }}
                    />
                  </span>

                  {showEmojiPicker && (
                    <div
                      className="absolute w-[300px] h-[300px] emoji-box"
                      style={{ top: "-800%", left: "-800%" }}
                    >
                      <EmojiPicker
                        pickerStyle={{ width: "100%" }}
                        onEmojiClick={handleEmojiClick}
                        lazyLoadEmojis={true}
                        searchDisabled={true}
                      />
                    </div>
                  )}
                </div>
                <button
                  className="p-2 bg-[#4949FA] inputcc text-white rounded-full"
                  onClick={handleSendMessage}
                >
                  <img
                    src={Send}
                    className="icon-input"
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

export default ChatSection;
