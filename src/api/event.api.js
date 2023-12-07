const { default: axiosInstance } = require(".");

export default deleteEventById = async (id) => {
  return await axiosInstance.delete(`/liveTV/event/${id}`);
};
