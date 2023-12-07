const { default: axiosInstance } = require(".");

const getAllUsers = async (skip, filter) => {
  let url = `/auth/getAllUsers/${skip}`;
  if (filter) {
    url = `${url}?searchString=${filter}`;
  }

  return await axiosInstance.get(url);
};
export default getAllUsers;
