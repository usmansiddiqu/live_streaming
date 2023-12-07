const { default: axiosInstance } = require(".");

export default getSpecificUser = async (id) => {
  return await axiosInstance.get(`/auth/getSpecificUser/${id}`);
};
