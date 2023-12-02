const { default: axiosInstance } = require(".");
const getChannel = async () => {
  const result = await axiosInstance.get("/liveTV/getAllLiveTVs");
  console.log(result);
  return result;
};
module.exports = {
  getChannel,
};
