const { default: axiosInstance } = require(".");

const login = async (data) => {
  return await axiosInstance.post("/auth/login", data);
};
const signup = async (data) => {
  return await axiosInstance.post("/auth/signup", data);
};
const loginWithGoogle = async (data) => {
  return await axiosInstance.post("/auth/loginWithGoogle", data);
};
const createUser = async (data) => {
  return await axiosInstance.post("/auth/createUser", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const getAllUsers = async () => {
  return await axiosInstance.get("/auth/getAllUsers");
};
const updateUser = async (data) => {
  return await axiosInstance.post("/auth/updateProfile", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const getSpecificUser = async (id) => {
  return await axiosInstance.get(`/auth/getSpecificUser/${id}`);
};
const deleteSingleUser = async (id) => {
  return await axiosInstance.delete(`/auth/deleteUser/${id}`);
};
module.exports = {
  login,
  signup,
  loginWithGoogle,
  createUser,
  getAllUsers,
  updateUser,
  getSpecificUser,
  deleteSingleUser,
};
