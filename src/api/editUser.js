const { default: axiosInstance } = require(".");

const updateUser = async (data) => {
  return await axiosInstance.post("/auth/updateProfile", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export default updateUser;
