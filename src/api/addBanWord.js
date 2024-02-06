const { default: axiosInstance } = require(".");
const addBanWord = async (data) => {
  return await axiosInstance.post(`/words/addBanWord`, data);
};
export default addBanWord;
