const { default: axiosInstance } = require(".");

export default getTransactions = async () => {
  return await axiosInstance.get("/transactions");
};
