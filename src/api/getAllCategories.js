const { default: axiosInstance } = require(".");

export default getAllCategories = async () => {
  return await axiosInstance.get("/category/getAllCategories");
};
