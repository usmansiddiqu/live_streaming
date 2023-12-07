const { default: axiosInstance } = require(".");

const codeverification = async (data) => {
  return await axiosInstance.post("/auth/codeverification", data);
};
export default codeverification;
