const { default: axiosInstance } = require(".");

export default getSliders = async () => {
  return await axiosInstance.get("/slider/getSliders");
};
