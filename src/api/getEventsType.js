const { default: axiosInstance } = require(".");

const getEventsByType = async (type) => {
  return await axiosInstance.get(`/liveTV/events/type/${type}`);
};
export default getEventsByType;
