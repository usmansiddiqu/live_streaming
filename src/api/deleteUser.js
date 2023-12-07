const { default: axiosInstance } = require(".");

export default deleteSingleUser = async (id) => {
  return await axiosInstance.delete(`/auth/deleteUser/${id}`);
};
