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

module.exports = { getEvents, getEventById, getEventsByType };
