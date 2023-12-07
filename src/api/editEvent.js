const { default: axiosInstance } = require(".");

const editEventById = async (id, body) => {
  return await axiosInstance.put(`/liveTV/event/${id}`, body);
};
export default editEventById;
