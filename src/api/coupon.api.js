const { default: axiosInstance } = require(".");

const deleteCoupon = async (id) => {
  return await axiosInstance.delete(`/coupon/${id}`);
};
export default deleteCoupon;
