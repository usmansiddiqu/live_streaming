const { default: axiosInstance } = require(".");

const getUserPayments = async () => {
  return await axiosInstance.get("/payment/user");
};

export default getUserPayments;
