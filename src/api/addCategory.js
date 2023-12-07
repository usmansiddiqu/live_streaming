const { default: axiosInstance } = require(".");

const createCategory = async (data) => {
  return await axiosInstance.post(`/category/createCategory`, data);
};
export default createCategory;
