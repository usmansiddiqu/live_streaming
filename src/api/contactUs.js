const { default: axiosInstance } = require(".");

const contactUs = async (data) => {
  return await axiosInstance.post(`/auth/contactPixelSport`, data);
};
export default contactUs;
