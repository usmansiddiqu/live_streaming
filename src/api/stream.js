const { default: axiosInstance } = require(".");

const stream = async () => {
  return await axiosInstance.get(`/chat/stream`);
};
export default stream;
