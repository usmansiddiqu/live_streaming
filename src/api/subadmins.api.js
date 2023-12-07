const { default: axiosInstance } = require(".");
export default getAllSubAdmin = async () => {
  return await axiosInstance.get("/auth/getSubAdmins");
};
