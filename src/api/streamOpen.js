const { default: axiosInstance } = require(".");
const streamOpen = async (sessionId) => {
  return await axiosInstance.post(`/stream/open`, { sessionId });
};
export default streamOpen;
