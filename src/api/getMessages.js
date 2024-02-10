const { default: axiosInstance } = require(".");

const getMessages = async () => {
  return await axiosInstance.get(`/chat/getMessages`);
};
export default getMessages;
