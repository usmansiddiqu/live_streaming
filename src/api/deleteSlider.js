const { default: axiosInstance } = require(".");

const deleteSlider = async (id) => {
  return await axiosInstance.delete(`/slider/deleteSlider/${id}`);
};
export default deleteSlider;
