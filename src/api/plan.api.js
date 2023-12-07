const { default: axiosInstance } = require(".");

export default getPlans = async () => {
  return await axiosInstance.get("/packages");
};
