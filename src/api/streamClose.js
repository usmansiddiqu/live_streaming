const { default: axiosInstance } = require(".");

const streamClose = async (sessionId) => {
  return await axiosInstance.post(`/stream/close`, { sessionId });
};
export default streamClose;
