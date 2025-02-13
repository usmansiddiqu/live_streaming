const { default: axiosInstance } = require(".");
const createEvent = async (data) => {
    const result = axiosInstance.post(`/liveTV/create-event`,data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result;
  };
export default createEvent;