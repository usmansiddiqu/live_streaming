const { default: axiosInstance } = require(".");
const createEvent = async (data) => {
    debugger
    return await axiosInstance.post(`/liveTV/create-event`,{data});
  };
export default createEvent;