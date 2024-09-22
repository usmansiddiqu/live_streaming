const { default: axiosInstance } = require(".");

const getGraphStats = async () => {
  return await axiosInstance.get(`/affiliate/graph/stats`);
};
export default getGraphStats;
