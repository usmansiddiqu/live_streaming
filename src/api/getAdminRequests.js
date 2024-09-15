const { default: axiosInstance } = require(".");

const getAdminRequest = async (id) => {
  return await axiosInstance.get(`/affiliate/admin`);
};
export default getAdminRequest;
