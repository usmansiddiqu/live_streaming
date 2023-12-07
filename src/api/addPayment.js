const { default: axiosInstance } = require(".");

export default createPayment = async (data) => {
  return await axiosInstance.post("/payment", data);
};
