const { default: axiosInstance } = require(".");

export default addSubAdmin = async (data) => {
  return await axiosInstance.post("/auth/addSubAdmin", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
