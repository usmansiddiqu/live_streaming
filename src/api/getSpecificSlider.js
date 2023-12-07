const { default: axiosInstance } = require(".");

const getSpecific = async (id) => {
  return await axiosInstance.get(`/slider/getSpecificSlider/${id}`);
};
export default getSpecific;
