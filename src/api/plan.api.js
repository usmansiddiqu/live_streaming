const { default: axiosInstance } = require(".");

const getPlans = async () => {
  return await axiosInstance.get("/packages");
};
export default getPlans;
