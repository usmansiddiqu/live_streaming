const { default: axiosInstance } = require(".");
const addBankDetails = async (data) => {
  return await axiosInstance.post(`/bankDetails/addBankDetails`, data);
};
export default addBankDetails;
