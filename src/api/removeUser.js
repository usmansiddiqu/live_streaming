const { default: axiosInstance } = require(".");

const removeUser = async (eventId) => {
  return await axiosInstance.get(`/chat/removeUser/${eventId}`);
};
export default removeUser;
