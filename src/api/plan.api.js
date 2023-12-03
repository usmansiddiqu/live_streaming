const { default: axiosInstance } = require(".");

const getPlans = async () => {
  return await axiosInstance.get("/packages");
};

module.exports = { getPlans };
