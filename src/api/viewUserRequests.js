const { default: axiosInstance } = require(".");

const viewUserRequests = async () => {
  return axiosInstance.get(`/affiliate/user?page=${1}`);
};
export default viewUserRequests;
