const { default: axiosInstance } = require(".");
const getCategories = async () => {
  const result = await axiosInstance.get("/category/getAllCategories");
  console.log(result);
  return result;
};
module.exports = {
  getCategories,
};
