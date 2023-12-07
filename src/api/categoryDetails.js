const { default: axiosInstance } = require(".");

export default getCategoryDetail = async (id) => {
  return await axiosInstance.get(`/category/getCategoryById/${id}`);
};
