const { default: axiosInstance } = require(".");

const sendMessage = async (data) => {
  return await axiosInstance.post("/chat/sendMessage", data);
};
export default sendMessage;
