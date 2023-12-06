const { default: axiosInstance } = require(".");
const createWishList = async (data) => {
  return axiosInstance.post("/wishList/createWishList", data);
};
const getWishList = async () => {
  return axiosInstance.get("/wishList/getAllWishListById");
};
module.exports = { createWishList, getWishList };
