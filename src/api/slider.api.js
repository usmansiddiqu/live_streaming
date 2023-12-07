const { default: axiosInstance } = require(".");

export default getSpecificDetails = async (id) => {
  return await axiosInstance.get(`/slider/detail/${id}`);
};
