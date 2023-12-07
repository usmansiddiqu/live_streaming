const { default: axiosInstance } = require(".");

export default deleteSlider = async (id) => {
  return await axiosInstance.delete(`/slider/deleteSlider/${id}`);
};
