const { default: axiosInstance } = require(".");
export default addChannelToDB = async (data) => {
  const result = axiosInstance.post("/liveTV/createLiveTV", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result;
};
