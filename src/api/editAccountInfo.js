const { default: axiosInstance } = require(".");

const updateAccount = async (id) => {
  return await axiosInstance.get(`/auth/updateAccount?id=${id}`);
};
export default updateAccount;
