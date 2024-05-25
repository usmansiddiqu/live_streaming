const { default: axiosInstance } = require(".");

const deleteBadWord = async (id) => {
  return await axiosInstance.delete(`/words/deleteWord/${id}`);
};
export default deleteBadWord;
