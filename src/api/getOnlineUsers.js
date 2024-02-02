const { default: axiosInstance } = require(".");

const getOnlineUsers = async (id) => {
  return await axiosInstance.get(`/chat/getUsers/${id}`);
};
export default getOnlineUsers;
