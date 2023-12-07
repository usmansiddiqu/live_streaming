const { default: axiosInstance } = require(".");
const createSlider = async (data) => {
  return await axiosInstance.post("/slider/createSlider", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export default createSlider;
