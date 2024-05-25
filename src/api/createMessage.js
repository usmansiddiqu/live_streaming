const { default: axiosInstance } = require(".");

const sendMessage = async (eventId) => {
  return await axiosInstance.post(`/chat/sendMessage`);
};
export default sendMessage;
