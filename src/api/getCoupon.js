const { default: axiosInstance } = require(".");

const getCoupons = async () => {
  return await axiosInstance.get("/coupon");
};
export default getCoupons;
