const { default: axiosInstance } = require(".");

const getCouponDetails = async (id) => {
  return await axiosInstance.get(`/coupon/${id}`);
};
export default getCouponDetails;
