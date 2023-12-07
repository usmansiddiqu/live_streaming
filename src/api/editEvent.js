const { default: axiosInstance } = require(".");

export default editEventById = async (id, body) => {
  return await axiosInstance.put(`/liveTV/event/${id}`, body);
};
