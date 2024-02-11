const { default: axiosInstance } = require(".");

const getUser = async () => {
  return await axiosInstance.get(`/chat/getUsers`);
};

export default getUser;
