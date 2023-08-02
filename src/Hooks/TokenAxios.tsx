import Axios from "axios";

const tokenAxios = Axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // baseURL:'https://commcop.in/ai_tech_ed/api/',
  headers: {
    "Content-Type": "application/json",
  },
});

tokenAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

tokenAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log("server error " + error);

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    }
  }
);

export default tokenAxios;
