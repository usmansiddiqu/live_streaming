const { default: axiosInstance } = require(".");

export default createWishList = async (data) => {
  return axiosInstance.post("/wishList/createWishList", data);
};
