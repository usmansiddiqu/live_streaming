const { default: axiosInstance } = require(".");

export default createCoupon = async (data) => {
  return await axiosInstance.post("/coupon", data);
};
