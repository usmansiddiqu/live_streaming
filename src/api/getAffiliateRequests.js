const { default: axiosInstance } = require(".");

const getTransactions = async (page, text) => {
  return await axiosInstance.get(`/affiliate/admin/transaction?page=${page}`);
};
export default getTransactions;
