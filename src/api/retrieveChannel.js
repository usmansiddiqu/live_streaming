const { default: axiosInstance } = require(".");

const getChannel = async () => {
  const result = await axiosInstance.get("/liveTV/getAllLiveTVs");
  return result;
};
export default getChannel;
