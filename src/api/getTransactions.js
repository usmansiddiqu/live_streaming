const { default: axiosInstance } = require(".");
const getTransaction = async (skip, filter) => {
  let url = `/payment/getPayments/${skip}`;
  if (filter) {
    url = `${url}?searchString=${filter}`;
  }

  return await axiosInstance.get(url);
};
export default getTransaction;
