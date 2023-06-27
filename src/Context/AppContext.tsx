import React, { createContext, useContext, useState } from "react";

interface MainContextProps {
  children: React.ReactNode;
}
interface ContextValue {
  user: boolean;
  admin: boolean;
  setUser:React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ContextValue = {
  user: false,
  setUser:()=>{},
  admin: false,
};

const Context = createContext<ContextValue>(defaultValue);

const MainContext: React.FC<MainContextProps> = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(true);




  return (
    <Context.Provider value={{ user, admin,setUser }}>{children}</Context.Provider>
  );
};

const AppContext = (): ContextValue => {
  return useContext(Context);
};
export { MainContext, AppContext };
