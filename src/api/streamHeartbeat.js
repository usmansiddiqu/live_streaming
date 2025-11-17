const { default: axiosInstance } = require(".");

const streamHeartbeat = async (sessionId) => {
  return await axiosInstance.post(`/stream/heartbeat`, { sessionId });
};
export default streamHeartbeat;
