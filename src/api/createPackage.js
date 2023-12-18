const { default: axiosInstance } = require(".");

const createPackage = async (body) => {
  return await axiosInstance.post(`/packages`, body);
};
export default createPackage;
