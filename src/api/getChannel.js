const { default: axiosInstance } = require(".");

export default getSpecificChannel = async (id) => {
  const result = axiosInstance.get(`/liveTV/getLiveTVById/${id}`);
  return result;
};
