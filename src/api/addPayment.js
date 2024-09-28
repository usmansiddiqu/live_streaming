const { default: axiosInstance } = require(".");

const createPayment = async (data) => {
  return await axiosInstance.post(`/payment/payou/${data}`);
  // return await axiosInstance.post("/payment", data);
};
export default createPayment;
