const { default: axiosInstance } = require(".");

const getPackagesAdmin = async () => {
  return await axiosInstance.get(`/packages/admin`);
};
export default getPackagesAdmin;
