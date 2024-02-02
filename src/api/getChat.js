const { default: axiosInstance } = require(".");

const getChat = async (eventId) => {
  return await axiosInstance.get(`/chat/getMessages/${eventId}`);
};
export default getChat;
