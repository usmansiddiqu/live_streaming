const { default: axiosInstance } = require(".");

const loginWithGoogle = async (data) => {
  return await axiosInstance.post("/auth/loginWithGoogle", data);
};
export default loginWithGoogle;
