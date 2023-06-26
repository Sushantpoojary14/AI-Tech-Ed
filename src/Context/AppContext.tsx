import React, { createContext, useContext, useState } from "react";

interface MainContextProps {
  children: React.ReactNode;
}
interface ContextValue {
  user: boolean;
  admin: boolean;
}

const defaultValue: ContextValue = {
  user: false,
  admin: false,
};

const Context = createContext<ContextValue>(defaultValue);

const MainContext: React.FC<MainContextProps> = ({ children }) => {
  const [user, setUser] = useState<boolean>(true);
  const [admin, setAdmin] = useState<boolean>(true);

  return (
    <Context.Provider value={{ user, admin }}>{children}</Context.Provider>
  );
};

const AppContext = (): ContextValue => {
  return useContext(Context);
};
export { MainContext, AppContext };
