import Axios from "axios";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import axiosBaseURL from "./BaseUrl";
import { useNavigate } from "react-router-dom";
import decodeToken from "jwt-decode";
const tokenAxios = Axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
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

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) 
    {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.reload();
    }
     
      

          
          // 
        
        
//         {
//           logoutUser()
//         }
//       if (isTokenExpired()) {
//         LogoutUser(); 
//         return;
//       }
//   //     try {
//   //       const refreshResponse = await tokenAxios.get("/refresh-token");
//   //       const newAccessToken = refreshResponse.data.access_token;

//   //       tokenAxios.defaults.headers.common[
//   //         "Authorization"
//   //       ] = `Bearer ${newAccessToken}`;

//   //       localStorage.setItem("token", newAccessToken);

//   //       return tokenAxios(originalRequest);
//   //     } catch (refreshError) {}
//   //   }

//   //   return Promise.reject(error);
  }
);

export default tokenAxios;
