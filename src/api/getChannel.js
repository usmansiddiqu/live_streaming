const { default: axiosInstance } = require(".");

const getSpecificChannel = async (id) => {
  const result = axiosInstance.get(`/liveTV/getLiveTVById/${id}`);
  return result;
};
export default getSpecificChannel;
