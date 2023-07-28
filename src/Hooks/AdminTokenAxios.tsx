import Axios from "axios";
import { AppContext } from "../Context/AppContext";
import axiosBaseURL from "./BaseUrl";

const adminTokenAxios = Axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

adminTokenAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminTokenAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await adminTokenAxios.get("/refresh-token");
        console.log(refreshResponse);
        const newAccessToken = refreshResponse.data.access_token;

        adminTokenAxios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;

        localStorage.setItem("admin_token", newAccessToken);

        return adminTokenAxios(originalRequest);
      } catch (refreshError) {}
    }

    return Promise.reject(error);
  }
);

export default adminTokenAxios;
