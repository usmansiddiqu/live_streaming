const { default: axiosInstance } = require(".");
const getChannel = async () => {
  const result = await axiosInstance.get("/liveTV/getAllLiveTVs");
  return result;
};
const addChannelToDB = async (data) => {
  const result = axiosInstance.post("/liveTV/createLiveTV", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result;
};
const editChannelInDB = async (data) => {
  const result = axiosInstance.post("/liveTV/updateLiveTV", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return result;
};
const getSpecificChannel = async (id) => {
  const result = axiosInstance.get(`/liveTV/getLiveTVById/${id}`);
  return result;
};
const deleteSpecificChannel = async (id) => {
  const result = axiosInstance.delete(`/liveTV/deleteLiveTV/${id}`);
  return result;
};
module.exports = {
  getChannel,
  addChannelToDB,
  editChannelInDB,
  getSpecificChannel,
  deleteSpecificChannel,
};
