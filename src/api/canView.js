const { default: axiosInstance } = require(".");

const canView = async () => {
  return await axiosInstance.get("/payment/canView");
};
export default canView;
