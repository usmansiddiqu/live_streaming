const { default: axiosInstance } = require(".");

const getUserHistory = async (id) => {
  return await axiosInstance.get(`/auth/getuserdetails/${id}`);
};
export default getUserHistory;
