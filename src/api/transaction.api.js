const { default: axiosInstance } = require(".");

const getTransactions = async () => {
  return await axiosInstance.get("/transactions");
};

module.exports = { getTransactions };
