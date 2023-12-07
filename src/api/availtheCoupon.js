const { default: axiosInstance } = require(".");

export default availCoupon = async (coupon) => {
  return await axiosInstance.post(`/coupon/${coupon}`);
};
