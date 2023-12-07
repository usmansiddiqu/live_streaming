const { default: axiosInstance } = require(".");

const availCoupon = async (coupon) => {
  return await axiosInstance.post(`/coupon/${coupon}`);
};
export default availCoupon;
