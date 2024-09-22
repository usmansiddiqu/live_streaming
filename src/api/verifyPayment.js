const { default: axiosInstance } = require(".");

const verifyPayment = async (id) => {
  return axiosInstance.patch(`/affiliate/${id}`);
};
export default verifyPayment;
