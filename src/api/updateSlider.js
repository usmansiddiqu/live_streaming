const { default: axiosInstance } = require(".");

export default editSlider = async (data) => {
  return await axiosInstance.post("/slider/editSlider", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
