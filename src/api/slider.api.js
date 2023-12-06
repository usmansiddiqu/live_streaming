const { default: axiosInstance } = require(".");
const createSlider = async (data) => {
  return await axiosInstance.post("/slider/createSlider", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const getSliders = async () => {
  return await axiosInstance.get("/slider/getSliders");
};
const editSlider = async (data) => {
  return await axiosInstance.post("/slider/editSlider", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const deleteSlider = async (id) => {
  return await axiosInstance.delete(`/slider/deleteSlider/${id}`);
};
const getSpecific = async (id) => {
  return await axiosInstance.get(`/slider/getSpecificSlider/${id}`);
};

const getSpecificDetails = async (id) => {
  return await axiosInstance.get(`/slider/detail/${id}`);
};
module.exports = {
  createSlider,
  getSliders,
  editSlider,
  deleteSlider,
  getSpecific,
  getSpecificDetails,
};
