const { default: axiosInstance } = require(".");

const createPayment = async (data) => {
  return await axiosInstance.post("/payment", data);
};

const availFreePayment = async () => {
  return await axiosInstance.get("/payment/free");
};

const getUserPayments = async () => {
  return await axiosInstance.get("/payment/user");
};

const verifyPayments = async (id) => {
  return await axiosInstance.get(`/payment/${id}`);
};
module.exports = {
  createPayment,
  availFreePayment,
  getUserPayments,
  verifyPayments,
};
