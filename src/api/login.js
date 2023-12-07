const { default: axiosInstance } = require(".");
const login = async (data) => {
  return await axiosInstance.post("/auth/login", data);
};

export default login;
