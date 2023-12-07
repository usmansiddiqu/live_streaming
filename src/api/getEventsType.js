const { default: axiosInstance } = require(".");

export default getEventsByType = async (type) => {
  return await axiosInstance.get(`/liveTV/events/type/${type}`);
};
