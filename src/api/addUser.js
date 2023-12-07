const { default: axiosInstance } = require(".");

const createUser = async (data) => {
  return await axiosInstance.post("/auth/createUser", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export default createUser;
