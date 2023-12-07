const { default: axiosInstance } = require(".");

const deleteEventById = async (id) => {
  return await axiosInstance.delete(`/liveTV/event/${id}`);
};
export default deleteEventById;
