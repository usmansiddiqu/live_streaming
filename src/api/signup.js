const { default: axiosInstance } = require(".");

export default signup = async (data) => {
  return await axiosInstance.post("/auth/signup", data);
};
