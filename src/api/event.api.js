const { default: axiosInstance } = require(".");

const getEvents = async () => {
  return await axiosInstance.get("/liveTV/events");
};

const getEventById = async (id) => {
  return await axiosInstance.get(`/liveTV/events/${id}`);
};

const getEventsByType = async (type) => {
  return await axiosInstance.get(`/liveTV/events/type/${type}`);
};

const deleteEventById = async (id) => {
  return await axiosInstance.delete(`/liveTV/event/${id}`);
};

const editEventById = async (id, body) => {
  return await axiosInstance.put(`/liveTV/event/${id}`, body);
};

module.exports = {
  getEvents,
  getEventById,
  getEventsByType,
  deleteEventById,
  editEventById,
};
