const { default: axiosInstance } = require(".");

export default getWishList = async () => {
  return axiosInstance.get("/wishList/getAllWishListById");
};
