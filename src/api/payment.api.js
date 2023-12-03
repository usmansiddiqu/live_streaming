const { default: axiosInstance } = require(".");

const createPayment = async (data) => {
  return await axiosInstance.post("/payment", data);
};

const availFreePayment = async () => {
  return await axiosInstance.get("/payment/free");
};

module.exports = { createPayment, availFreePayment };
