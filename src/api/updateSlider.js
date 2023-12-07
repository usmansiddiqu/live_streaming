const { default: axiosInstance } = require(".");

const editSlider = async (data) => {
  return await axiosInstance.post("/slider/editSlider", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export default editSlider;
