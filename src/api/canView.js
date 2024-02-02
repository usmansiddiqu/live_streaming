const { default: axiosInstance } = require(".");

<<<<<<< Updated upstream
const canView = async () => {
  return await axiosInstance.get("/payment/canView");
=======
<<<<<<< Updated upstream
const canView = async (id) => {
  return await axiosInstance.get(`/payment/canView/${id}`);
=======
<<<<<<< Updated upstream
const canView = async () => {
  return await axiosInstance.get("/payment/canView");
=======
const canView = async (id) => {
  return await axiosInstance.get(`/payment/canView`);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
>>>>>>> Stashed changes
};
export default canView;
