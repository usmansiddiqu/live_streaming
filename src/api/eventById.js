const { default: axiosInstance } = require(".");

const getEventById = async (id) => {
  return await axiosInstance.get(`/liveTV/events/${id}`);
};
export default getEventById;
