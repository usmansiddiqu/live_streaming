const { default: axiosInstance } = require(".");

export default createCategory = async (data) => {
  return await axiosInstance.post(`/category/createCategory`, data);
};
