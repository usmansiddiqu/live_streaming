const { default: axiosInstance } = require(".");

const editPackage = async (body) => {
  return await axiosInstance.put(`/packages`, body);
};
export default editPackage;
