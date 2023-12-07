const { default: axiosInstance } = require(".");
const addChannelToDB = async (data) => {
  const result = axiosInstance.post("/liveTV/createLiveTV", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result;
};
export default addChannelToDB;
