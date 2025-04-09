const { default: axiosInstance } = require(".");

const getUserDetail = async (userId) => {
  return await axiosInstance.get(`/affiliate/userDetail/${userId}`);
};

export default getUserDetail;
