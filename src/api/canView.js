const { default: axiosInstance } = require(".");

const canView = async (id) => {
  return await axiosInstance.get(`/payment/canView/${id}`);
};
export default canView;
