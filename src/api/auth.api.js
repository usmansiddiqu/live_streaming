const { default: axiosInstance } = require(".");

const login = async (data) => {
  return await axiosInstance.post("/auth/login", data);
};

const signup = async (data) => {
  return await axiosInstance.post("/auth/signup", data);
};

module.exports = { login, signup };
