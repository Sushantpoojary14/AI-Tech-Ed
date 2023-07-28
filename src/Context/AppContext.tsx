import { useMutation } from "@tanstack/react-query";
import { Axios } from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import tokenAxios from "../Hooks/TokenAxios";
import { UserContext } from "./UserContext";
import adminTokenAxios from "../Hooks/AdminTokenAxios";

interface MainContextProps {
  children: React.ReactNode;
}
type userData = {
  id: number;
  name: string;
  email: string;
  DOB: Date;
  phone: string;
};

interface ContextValue {
  user: userData | null;
  admin: userData | null;
  token: string | null;
  adminToken: string | null;
  login: (data: userData, token: string) => void;
  adminLogin: (data: userData, token: string) => void;
  Logout: () => void;
  adminLogout: () => void;
  refreshToken: (token: string) => void;
}

interface Action {
  type: string;
  payload: any;
}

const defaultValue: ContextValue = {
  user: null,
  admin: null,
  token: "",
  adminToken: "",
  login: (data: userData, token: string) => {},
  adminLogin: (data: userData, token: string) => {},
  Logout: () => {},
  adminLogout: () => {},
  refreshToken: (token: string) => {},
};

type State = {
  user: userData;
  token: string;
  admin: userData;
  adminToken: string;
};

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  token: localStorage.getItem("token"),
  admin: localStorage.getItem("admin")
    ? JSON.parse(localStorage.getItem("admin")!)
    : null,
  adminToken: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "SET_ADMINTOKEN":
      return { ...state, adminToken: action.payload };
    case "SET_ADMIN":
      return { ...state, admin: action.payload };

    default:
      return state;
  }
};
const Context = createContext<ContextValue>(defaultValue);

const MainContext: React.FC<MainContextProps> = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, token, admin, adminToken } = state;
  const { handleClose, handleMenuClose, handleCloseUserMenu } = UserContext();

  const logout = useMutation({
    mutationFn: async () => {
      return await tokenAxios.post("/logout", null);
    },
    onSuccess: (response) => {
      console.log(response);
      localStorage.removeItem("token");
      dispatch({ type: "SET_TOKEN", payload: "" });
      localStorage.removeItem("user");
      dispatch({ type: "SET_USER", payload: "" });
      navigate("/");
      handleCloseUserMenu();
      handleMenuClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const AdminLogout = useMutation({
    mutationFn: async () => {
      return await adminTokenAxios.post("/admin/logout", null);
    },
    onSuccess: (response) => {
      console.log(response);
      localStorage.removeItem("admin_token");
      dispatch({ type: "SET_ADMINTOKEN", payload: "" });
      localStorage.removeItem("admin");
      dispatch({ type: "SET_ADMIN", payload: "" });
      navigate("/");
      handleCloseUserMenu();
      handleMenuClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const login = (data: userData, token: string) => {
    localStorage.setItem("token", token);
    dispatch({ type: "SET_TOKEN", payload: token });
    localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: "SET_USER", payload: data });
    navigate("/user");
    handleClose();
    // navigate("/");
  };
  const refreshToken = (token: string) => {
    console.log(token);
    localStorage.setItem("token", token);
    dispatch({ type: "SET_TOKEN", payload: token });
  };

  const adminLogin = (data: userData, token: string) => {
    localStorage.setItem("admin_token", token);
    dispatch({ type: "SET_ADMINTOKEN", payload: token });
    localStorage.setItem("admin", JSON.stringify(data));
    dispatch({ type: "SET_ADMIN", payload: JSON.stringify(data) });
    navigate("/admin");
  };

  const Logout = () => {
    logout.mutate();
  };

  const adminLogout = () => {
    AdminLogout.mutate();
  };

  return (
    <Context.Provider
      value={{
        user,
        admin,
        token,
        login,
        adminToken,
        adminLogin,
        adminLogout,
        Logout,
        refreshToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const AppContext = (): ContextValue => {
  return useContext(Context);
};
export { MainContext, AppContext };
