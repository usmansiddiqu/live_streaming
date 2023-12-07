const { default: axiosInstance } = require(".");

const verifyPayments = async (id) => {
  return await axiosInstance.get(`/payment/${id}`);
};
export default verifyPayments;
