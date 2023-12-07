const { default: axiosInstance } = require(".");

const signup = async (data) => {
  return await axiosInstance.post("/auth/signup", data);
};
export default signup;
