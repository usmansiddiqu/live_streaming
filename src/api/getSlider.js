const { default: axiosInstance } = require(".");

const getSliders = async () => {
  return await axiosInstance.get("/slider/getSliders");
};
export default getSliders;
