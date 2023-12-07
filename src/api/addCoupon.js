const { default: axiosInstance } = require(".");

const createCoupon = async (data) => {
  return await axiosInstance.post("/coupon", data);
};
export default createCoupon;
