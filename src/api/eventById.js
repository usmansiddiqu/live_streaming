const { default: axiosInstance } = require(".");

export default getEventById = async (id) => {
  return await axiosInstance.get(`/liveTV/events/${id}`);
};
