const { default: axiosInstance } = require(".");

const makeRequest = async () => {
  return await axiosInstance.post(`/affiliate/request`);
};
export default makeRequest;
