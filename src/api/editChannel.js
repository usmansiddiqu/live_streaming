const { default: axiosInstance } = require(".");

export default editChannelInDB = async (data) => {
  const result = axiosInstance.post("/liveTV/updateLiveTV", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result;
};
