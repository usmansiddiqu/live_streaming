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
const getAllUsers = async (skip, filter) => {
  let url = `/auth/getAllUsers/${skip}`;
  if (filter) {
    url = `${url}?searchString=${filter}`;
  }

  return await axiosInstance.get(url);
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
const sendVerificationCode = async (data) => {
  return await axiosInstance.post("/auth/sendVerificationCode", data);
};
const codeverification = async (data) => {
  return await axiosInstance.post("/auth/codeverification", data);
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
  sendVerificationCode,
  codeverification,
};
