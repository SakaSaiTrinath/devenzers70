import axios from "axios";
require("dotenv").config();

const axiosInstance = axios.create({
  // baseURL: "http://10.104.3.24:5006/"
  baseURL: "http://vampboy-backend:5006/"
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(
      (error.response &&
        error.response.data &&
        JSON.stringify(error.response.data)) ||
        String(error) ||
        error.message ||
        "Something went wrong!"
    );
  }
);

export default axiosInstance;
