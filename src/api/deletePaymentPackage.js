const { default: axiosInstance } = require(".");

const deletePaymentPackage = async (id) => {
  return await axiosInstance.delete(`/packages/${id}`);
};
export default deletePaymentPackage;
