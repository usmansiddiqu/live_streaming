const { default: axiosInstance } = require(".");

const deleteSingleUser = async (id) => {
  return await axiosInstance.delete(`/auth/deleteUser/${id}`);
};
export default deleteSingleUser;
