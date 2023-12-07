const { default: axiosInstance } = require(".");

export default availFreePayment = async () => {
  return await axiosInstance.get("/payment/free");
};
