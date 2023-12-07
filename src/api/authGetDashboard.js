const { default: axiosInstance } = require(".");

const getDashboardData = async () => {
  return await axiosInstance.get("/auth/getPaymentsByDateRange");
};
export default getDashboardData;
