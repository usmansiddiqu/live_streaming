const { default: axiosInstance } = require(".");

const getEvents = async (data) => {
  return await axiosInstance.get("/liveTV/events", data);
};

module.exports = { getEvents };
