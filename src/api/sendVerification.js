const { default: axiosInstance } = require(".");

export default sendVerificationCode = async (data) => {
  return await axiosInstance.post("/auth/sendVerificationCode", data);
};
