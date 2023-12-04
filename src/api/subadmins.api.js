const { default: axiosInstance } = require(".");
const getAllSubAdmin = async () => {
  return await axiosInstance.get("/auth/getSubAdmins");
};
const addSubAdmin = async (data) => {
  return await axiosInstance.post("/auth/addSubAdmin", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const editSubAdmin = async (data) => {
  return await axiosInstance.post("/auth/editSubAdmin", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
module.exports = { getAllSubAdmin, addSubAdmin, editSubAdmin };
