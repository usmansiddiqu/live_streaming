const { default: axiosInstance } = require(".");

export default codeverification = async (data) => {
  return await axiosInstance.post("/auth/codeverification", data);
};
