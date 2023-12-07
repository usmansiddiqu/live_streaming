const { default: axiosInstance } = require(".");

const editSubAdmin = async (data) => {
  return await axiosInstance.post("/auth/editSubAdmin", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
export default editSubAdmin;
