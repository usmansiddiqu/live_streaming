const { default: axiosInstance } = require(".");

export default editSubAdmin = async (data) => {
  return await axiosInstance.post("/auth/editSubAdmin", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
