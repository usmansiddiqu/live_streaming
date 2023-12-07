const { default: axiosInstance } = require(".");

export default getSpecific = async (id) => {
  return await axiosInstance.get(`/slider/getSpecificSlider/${id}`);
};
