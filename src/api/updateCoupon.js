const { default: axiosInstance } = require(".");

export default editCoupon = async (data) => {
  return await axiosInstance.put(`/coupon`, data);
};
