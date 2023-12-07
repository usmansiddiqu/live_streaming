const { default: axiosInstance } = require(".");

const getEvents = async () => {
  return await axiosInstance.get("/liveTV/events");
};
export default getEvents;
