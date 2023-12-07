const { default: axiosInstance } = require(".");

const sendVerificationCode = async (data) => {
  return await axiosInstance.post("/auth/sendVerificationCode", data);
};
export default sendVerificationCode;
