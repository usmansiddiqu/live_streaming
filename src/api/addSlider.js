const { default: axiosInstance } = require(".");
export default createSlider = async (data) => {
  return await axiosInstance.post("/slider/createSlider", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
