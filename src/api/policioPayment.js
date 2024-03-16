const { default: axiosInstance } = require(".");
const policioPayment = async (data) => {
  console.log(data);
  return await axiosInstance.post("/crypto", data);
};
export default policioPayment;
