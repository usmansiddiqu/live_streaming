const { default: axiosInstance } = require(".");

export default getChannel = async () => {
  const result = await axiosInstance.get("/liveTV/getAllLiveTVs");
  return result;
};
