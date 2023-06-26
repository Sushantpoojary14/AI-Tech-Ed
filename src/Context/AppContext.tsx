import React, { createContext, useContext, useState } from 'react';

interface MainContextProps {
  children: React.ReactNode;
}
interface ContextValue {
  user:boolean;
}

const defaultValue: ContextValue = {
  user:false,
};

const Context = createContext<ContextValue>(defaultValue);

const MainContext: React.FC<MainContextProps>  = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);
  
 
  return (
    <Context.Provider value={{user}}>
      {children}
    </Context.Provider>
  );
};

const AppContext = ():ContextValue => {
  return useContext(Context);
};
 export  {MainContext , AppContext};