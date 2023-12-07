const { default: axiosInstance } = require(".");
const getAllSubAdmin = async () => {
  return await axiosInstance.get("/auth/getSubAdmins");
};
export default getAllSubAdmin;
