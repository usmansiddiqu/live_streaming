import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
});

const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["token"] = `${token}`;
}

export default axiosInstance;
