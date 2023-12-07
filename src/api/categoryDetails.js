const { default: axiosInstance } = require(".");

const getCategoryDetail = async (id) => {
  return await axiosInstance.get(`/category/getCategoryById/${id}`);
};
export default getCategoryDetail;
