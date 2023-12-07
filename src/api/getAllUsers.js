const { default: axiosInstance } = require(".");

export default getAllUsers = async (skip, filter) => {
  let url = `/auth/getAllUsers/${skip}`;
  if (filter) {
    url = `${url}?searchString=${filter}`;
  }

  return await axiosInstance.get(url);
};
