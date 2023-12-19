import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://37.49.230.117/backend",
  // baseURL: "http://localhost:4000/backend",

  timeout: 50000,
});

const token = localStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["token"] = `${token}`;
}

export default axiosInstance;
