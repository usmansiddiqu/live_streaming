const { default: axiosInstance } = require(".");
const getBadWord = async () => {
  return await axiosInstance.get("/words/getAllBanWords");
};
export default getBadWord;
