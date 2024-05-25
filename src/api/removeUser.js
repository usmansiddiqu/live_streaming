const { default: axiosInstance } = require(".");

const removeUser = async () => {
  return await axiosInstance.get(`/chat/removeUser`);
};
export default removeUser;
