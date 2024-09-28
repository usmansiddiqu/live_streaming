const { default: axiosInstance } = require(".");

const createPayment = async (data) => {
  return await axiosInstance.get(`/payment/payou/${data.package_id}`);
  // return await axiosInstance.post("/payment", data);
};
export default createPayment;
