const { default: axiosInstance } = require(".");

const addSubAdmin = async (data) => {
  return await axiosInstance.post("/auth/addSubAdmin", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export default addSubAdmin;
