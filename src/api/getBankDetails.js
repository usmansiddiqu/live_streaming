const { default: axiosInstance } = require(".");
const bankDetails = async (id) => {
  return await axiosInstance.get(`/bankDetails/getBankDetailsByUser/${id}`);
};
export default bankDetails;
