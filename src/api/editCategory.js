const { default: axiosInstance } = require(".");

const updateCategory = async (data) => {
  return await axiosInstance.post(`/category/updateCategory`, data);
};
export default updateCategory;
