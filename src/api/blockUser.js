const { default: axiosInstance } = require(".");

const blockUser = async (data) => {
  return await axiosInstance.post("/blocked_user", data);
};
export default blockUser;
