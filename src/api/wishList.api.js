const { default: axiosInstance } = require(".");

const getWishList = async () => {
  return axiosInstance.get("/wishList/getAllWishListById");
};
export default getWishList;
