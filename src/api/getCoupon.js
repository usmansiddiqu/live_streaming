const { default: axiosInstance } = require(".");

export default getCoupons = async () => {
  return await axiosInstance.get("/coupon");
};
