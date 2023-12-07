const { default: axiosInstance } = require(".");

export default updateUser = async (data) => {
  return await axiosInstance.post("/auth/updateProfile", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
