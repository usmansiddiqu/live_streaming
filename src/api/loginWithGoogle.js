const { default: axiosInstance } = require(".");

export default loginWithGoogle = async (data) => {
  return await axiosInstance.post("/auth/loginWithGoogle", data);
};
