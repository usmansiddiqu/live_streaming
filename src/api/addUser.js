const { default: axiosInstance } = require(".");

export default createUser = async (data) => {
  return await axiosInstance.post("/auth/createUser", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
