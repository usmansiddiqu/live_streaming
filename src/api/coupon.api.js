const { default: axiosInstance } = require(".");

const getCoupons = async () => {
  return await axiosInstance.get("/coupon");
};

const getCouponDetails = async (id) => {
  return await axiosInstance.get(`/coupon/${id}`);
};

const createCoupon = async (data) => {
  return await axiosInstance.post("/coupon", data);
};

const deleteCoupon = async (id) => {
  return await axiosInstance.delete(`/coupon/${id}`);
};

const editCoupon = async (data) => {
  return await axiosInstance.put(`/coupon`, data);
};

const availCoupon = async (coupon) => {
  return await axiosInstance.post(`/coupon/${coupon}`);
};

module.exports = {
  getCoupons,
  createCoupon,
  deleteCoupon,
  getCouponDetails,
  editCoupon,
  availCoupon,
};
