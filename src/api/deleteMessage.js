const { default: axiosInstance } = require(".");

const deleteMessage = async (id) => {
  return await axiosInstance.delete(`/chat/deleteMessage/${id}`);
};
export default deleteMessage;
