const { default: axiosInstance } = require(".");

const getSpecificPackage = async (id) => {
  return await axiosInstance.get(`/packages/${id}`);
};
export default getSpecificPackage;
