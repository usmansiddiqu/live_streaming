const { default: axiosInstance } = require(".");

const cancelSub = async (id) => {
  return await axiosInstance.get(`/auth/cancelSub?id=${id}`);
};
export default cancelSub;