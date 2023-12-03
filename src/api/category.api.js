const { default: axiosInstance } = require(".");

const getCategories = async () => {
  return await axiosInstance.get("/category/getAllCategories");
};

const getCategoryDetail = async (id) => {
  return await axiosInstance.get(`/category/getCategoryById/${id}`);
};

const updateCategory = async (data) => {
  return await axiosInstance.post(`/category/updateCategory`, data);
};

const createCategory = async (data) => {
  return await axiosInstance.post(`/category/createCategory`, data);
};

const deleteCategoryById = async (id) => {
  return await axiosInstance.delete(`/category/deleteCategory/${id}`);
};

module.exports = {
  getCategories,
  getCategoryDetail,
  updateCategory,
  createCategory,
  deleteCategoryById,
};
