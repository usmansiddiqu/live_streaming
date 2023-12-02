const { async } = require("q");
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

module.exports = { getCategories, getCategoryDetail, updateCategory };
