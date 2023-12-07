const { default: axiosInstance } = require(".");

export default deleteSpecificChannel = async (id) => {
  const result = axiosInstance.delete(`/liveTV/deleteLiveTV/${id}`);
  return result;
};
