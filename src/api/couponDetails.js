const { default: axiosInstance } = require(".");

export default getCouponDetails = async (id) => {
  return await axiosInstance.get(`/coupon/${id}`);
};
