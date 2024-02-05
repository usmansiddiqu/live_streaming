const { default: axiosInstance } = require(".");

const getUser = async (id) => {
  return await axiosInstance.get(`/chat/getUsers/${id}`);
};

export default getUser;
