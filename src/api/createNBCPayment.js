const { default: axiosInstance } = require(".");

const createNBCPayment = async (packageId, orderId, user) => {
  return await axiosInstance.post(`/payment/createNBCPayment`, {
    packageId,
    orderId,
    user,
  });
};
export default createNBCPayment;
