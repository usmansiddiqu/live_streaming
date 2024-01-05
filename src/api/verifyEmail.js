const { default: axiosInstance } = require(".");

const verifyEmail = async (data) => {
  return await axiosInstance.post("/auth/verifyEmail", data);
};
export default verifyEmail;
