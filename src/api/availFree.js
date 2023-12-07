const { default: axiosInstance } = require(".");

const availFreePayment = async () => {
  return await axiosInstance.get("/payment/free");
};
export default availFreePayment;
