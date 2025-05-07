const { default: axiosInstance } = require(".");

const getAllUsers = async (skip, filter, dateFrom, dateTo) => {
  let url = `/auth/getAllUsers/${skip}`;
  if (filter) {
    url = `${url}?searchString=${filter}`;
  }
  if (dateFrom && dateTo) {
    url = `${url}?dateFrom=${dateFrom}&dateTo=${dateTo}`;
  }

  return await axiosInstance.get(url);
};
export default getAllUsers;
