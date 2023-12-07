const { default: axiosInstance } = require(".");

const editCoupon = async (data) => {
  return await axiosInstance.put(`/coupon`, data);
};
export default editCoupon;
