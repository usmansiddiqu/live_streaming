const { default: axiosInstance } = require(".");

export default updateCategory = async (data) => {
  return await axiosInstance.post(`/category/updateCategory`, data);
};
