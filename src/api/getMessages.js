const { default: axiosInstance } = require(".");

const getMessages = async (id) => {
  return await axiosInstance.get(`/chat/getMessages/${id}`);
};
export default getMessages;
