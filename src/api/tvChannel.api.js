const { default: axiosInstance } = require(".");

const deleteSpecificChannel = async (id) => {
  const result = axiosInstance.delete(`/liveTV/deleteLiveTV/${id}`);
  return result;
};
export default deleteSpecificChannel;
