const { default: axiosInstance } = require(".");

const getSpecificDetails = async (id) => {
  return await axiosInstance.get(`/slider/detail/${id}`);
};
export default getSpecificDetails;
