const { default: axiosInstance } = require(".");

export default getEvents = async () => {
  return await axiosInstance.get("/liveTV/events");
};
