const { default: axiosInstance } = require(".");

const getDetails = async () => {
  return await axiosInstance.post("/auth/get");
};
export default getDetails;
