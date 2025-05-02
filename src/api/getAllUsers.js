const { default: axiosInstance } = require(".");

const getAllUsers = async (skip, filter, date) => {
  let url = `/auth/getAllUsers/${skip}`;
  if (filter) {
    url = `${url}?searchString=${filter}`;
  }
  if (date) {
    url = `${url}?date=${date}`;
  }

  return await axiosInstance.get(url);
};
export default getAllUsers;
