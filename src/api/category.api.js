const { default: axiosInstance } = require(".");

const deleteCategoryById = async (id) => {
  return await axiosInstance.delete(`/category/deleteCategory/${id}`);
};
export default deleteCategoryById;
