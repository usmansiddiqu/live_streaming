const { default: axiosInstance } = require(".");

export default deleteCoupon = async (id) => {
  return await axiosInstance.delete(`/coupon/${id}`);
};
