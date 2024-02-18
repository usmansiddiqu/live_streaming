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
import Back from "../Assets/Icons/undo.png";

const ChatSection = ({ setTheaterMode }) => {
  const params = useParams();
  const eventId = params.id;

  const [users, setUsers] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [mentionData, setMentionData] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [data, setData] = useState(
    localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : {}
  );
  const [isMod, setIsMod] = useState(
    localStorage?.getItem("data")
      ? JSON.parse(localStorage?.getItem("data"))?.isMod
      : false
  );
  const [isBanned, setIsBanned] = useState(
    localStorage?.getItem("data")
      ? JSON.parse(localStorage?.getItem("data"))?.isBanned
      : false
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
        padding: 0,
        height: 30,
      },

      input: {
        padding: 7,
        outline: 0,
        border: 0,
        height: 30,
        left: "unset",
        position: "absolute",
        // bottom: 20,
        lineHeight: 1,
        outline: "none",
        focus: {
          ring: 0,
        },
      },
    },

    suggestions: {
      top: "unset",
      bottom: "35px",
      zIndex: 99,
      maxHeight: "90px",
      overflow: "auto",
      list: {
        backgroundColor: "#0D0620",
        border: "1px solid white",
        // fontSize: 10,
      },

      item: {
        // padding: "5px 15px",
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
  // const memoizedMessages = useef(
  //   () =>
  //     messages?.map((msg, index) => (
  //       <Message
  //         key={index}
  //         msg={msg}
  //         messages={messages}
  //         setMessages={setMessages}
  //         index={index}
  //         isMod={isMod}
  //         isOpen={openActionBoxIndex === index}
  //         toggleActionBox={toggleActionBox}
  //       />
  //     )),
  //   [messages]
  // );

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
      const data = await getMessages();
      setMessages(data?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUsers = async () => {
    try {
      const response = await getUser();
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
  const establishConnection = async () => {
    console.log("connection established");
    const ed = new EventSourcePolyfill(
      `http://pixelsport.tv/backend/chat/stream`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
        heartbeatTimeout: 120000,
      }
    );
    ed?.addEventListener("message", (event) => {
      const { data, event: eventType } = JSON.parse(event.data);
      if (eventType != "CHAT_JOINED") {
        console.log("COMMENT", JSON.stringify({ data, eventType }));
      }

      switch (eventType) {
        case "CHAT_CREATED":
          setMessages((prevMessages) => [...prevMessages, data]);
          break;
        case "CHAT_JOINED":
          try {
            let connectedUsers = JSON.parse(data.data);
            connectedUsers = JSON.parse(connectedUsers["STREAM"]);

            setOnlineUsers(Object.keys(connectedUsers).length);
            let u = [];
            for (const [key, value] of Object.entries(connectedUsers)) {
              u.push({
                id: key,
                display: value,
              });
            }
            setUsers(u);
          } catch (error) {}
          break;
        case "CHAT_LEFT":
          try {
            let connectedUsers = JSON.parse(data.data);
            connectedUsers = connectedUsers["STREAM"];
            setOnlineUsers(Object.keys(connectedUsers).length);
            let u = [];
            for (const [key, value] of Object.entries(connectedUsers)) {
              u.push({
                id: key,
                display: value,
              });
            }
            setUsers(u);
          } catch (error) {}
          break;
        case "MOD":
        case "BAN":
          try {
            localStorage.setItem("data", JSON.stringify(data));
            window.dispatchEvent(new Event("DATA_UPDATED"));
          } catch (error) {}
          break;
        case "MESSAGE_DELETED":
          try {
            setMessages((prevMessages) =>
              prevMessages.filter(
                (message) => String(message._id) != JSON.parse(data.data)
              )
            );
          } catch (error) {}
          break;
        case "COMMENT":
          try {
            // console.log("COMMENT", JSON.stringify(data));
          } catch (error) {}
          break;
        default:
        // Handle unknown event type
      }
    });

    ed.onerror = (error) => {
      console.error("SSE error:", error);
      ed.close();
      setTimeout(() => {
        establishConnection();
      }, 1000);
    };

    let reconnectInterval;
    const reconnect = () => {
      setTimeout(() => {
        establishConnection();
      }, 1000);
    };
    // reconnectInterval = setInterval(() => {
    //   clearInterval(reconnectInterval);
    //   ed?.close();
    //   console.log("trying to reconnect");
    //   reconnect();
    // }, 900000);
    // 900000;
    return () => {
      // clearInterval(reconnectInterval);
      ed?.close();
      removeUser();
    };
  };
  useEffect(() => {
    getMessageFrom();
    getUsers();
    establishConnection();
    window.addEventListener("DATA_UPDATED", () => {
      const data = JSON.parse(localStorage.getItem("data"));
      setIsMod(data.isMod);
      setIsBanned(data.isBanned);
    });
  }, []);

  useEffect(() => {
    const chatScroll = document.querySelector(".chat-bar");
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }, [messages]);

  return (
    <>
      <div className="mx-auto p-1 h-[100%] w-[100%] responsive-container">
        <div className="w-[100%] flex justify-between mb-1">
          <button
            className="p-2 bg-[#4949FA] inputcc text-white rounded-full"
            onClick={() => setTheaterMode((prevMode) => !prevMode)}
          >
            <img
              src={Back}
              className="icon-input"
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </button>

          <span className="text-white p-1" style={{ fontWeight: "bold" }}>
            Live Stream Chat
          </span>
          <span></span>
        </div>
        <div
          className="  relative chat-box-container mb-3"
          style={{ height: "98%" }}
        >
          <div
            className="chat-bar mb-1"
            style={{
              height: "89%",
              overflowY: "auto",
              // transform: "rotate(180deg)",
            }}
          >
            <div
              className="mb-2 mt-2 chat-scroll "
              style={{ maxHeight: "77%", overflowY: "visible" }}
            >
              {/* <div style={{ transform: "rotate(180deg)" }}> */}
              <div>
                {messages?.map((msg, index) => (
                  <Message
                    key={index}
                    msg={msg}
                    messages={messages}
                    setMessages={setMessages}
                    index={index}
                    isMod={isMod}
                    isOpen={openActionBoxIndex === index}
                    toggleActionBox={toggleActionBox}
                  />
                ))}
              </div>
              {/* {messages.map((msg, index) => (
                <Message key={index} msg={msg} index={index} />
              ))} */}
            </div>
          </div>

          <div className="flex flex-column  absolute w-[100%] px-2 mb-2 input-box ">
            <div
              className="flex"
              style={{
                justifyContent: "flex-end",
              }}
            >
              {/* <div
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
              </div> */}
            </div>

            <div
              className="flex border border-0 rounded-full  items-center"
              style={{ justifyContent: "space-between" }}
            >
              <div className="w-[100%] input-1 flex p-1 items-center">
                {isBanned ? (
                 <div className="w-[100%] text-center">
                   <h1 className="text-white text-sm">You have been banned from Chat!</h1>
                 </div>
                ) : (
                  <MentionsInput
                    value={newMessage}
                    onChange={(e, newValue, plainTextValue, mentions) => {
                      setNewMessage(newValue);
                      setMentionData(mentions);
                    }}
                    onKeyDown={handleKeyDown}
                    style={mentionStyle}
                    placeholder="Type your message"
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
                )}
              </div>

              <div className="flex justify-evenly" style={{ width: "80px" }}>
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
