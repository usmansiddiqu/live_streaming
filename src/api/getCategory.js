const { default: axiosInstance } = require(".");
const getAllCategories = async () => {
  return await axiosInstance.get("/category/getAllCategories");
};
export default getAllCategories;
