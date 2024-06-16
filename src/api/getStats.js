const { default: axiosInstance } = require(".");

const getStats = async () => {
  return await axiosInstance.get(`/affiliate/stats`);
};
export default getStats;
