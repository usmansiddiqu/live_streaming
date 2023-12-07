const { default: axiosInstance } = require(".");

const createWishList = async (data) => {
  return axiosInstance.post("/wishList/createWishList", data);
};
export default createWishList;
