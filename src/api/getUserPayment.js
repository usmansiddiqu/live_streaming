const { default: axiosInstance } = require(".");

export default getUserPayments = async () => {
  return await axiosInstance.get("/payment/user");
};
