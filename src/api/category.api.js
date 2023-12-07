const { default: axiosInstance } = require(".");

export default deleteCategoryById = async (id) => {
  return await axiosInstance.delete(`/category/deleteCategory/${id}`);
};
