const { default: axiosInstance } = require(".");
const getSpecificUser = async (id) => {
  return await axiosInstance.get(`/auth/getSpecificUser/${id}`);
};
export default getSpecificUser;
