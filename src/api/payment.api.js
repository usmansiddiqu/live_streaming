const { default: axiosInstance } = require(".");

export default verifyPayments = async (id) => {
  return await axiosInstance.get(`/payment/${id}`);
};
