const { default: axiosInstance } = require(".");

const getOnlineUsers = async () => {
  return await axiosInstance.get(`/chat/getUsers`);
};
export default getOnlineUsers;
