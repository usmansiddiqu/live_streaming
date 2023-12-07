const { default: axiosInstance } = require(".");
export default login = async (data) => {
  return await axiosInstance.post("/auth/login", data);
};
