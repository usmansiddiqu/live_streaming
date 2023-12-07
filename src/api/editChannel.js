const { default: axiosInstance } = require(".");

const editChannelInDB = async (data) => {
  const result = axiosInstance.post("/liveTV/updateLiveTV", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result;
};
export default editChannelInDB;
