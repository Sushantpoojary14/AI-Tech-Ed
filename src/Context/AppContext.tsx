import { useStepContext } from '@mui/material/Step';
import React, { createContext, useContext, useState } from 'react';


interface MainContextProps {
  children: React.ReactNode;
}
interface ContextValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user:boolean;
}

const defaultValue: ContextValue = {
  isLoading: false,
  setIsLoading: () => {},
  user:false,
};

const Context = createContext<ContextValue>(defaultValue);

const MainContext: React.FC<MainContextProps>  = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  return (
    <Context.Provider value={{ setIsLoading, isLoading ,user}}>
      {children}
    </Context.Provider>
  );
};

const AppContext = ():ContextValue => {
  return useContext(Context);
};
 export  {MainContext , AppContext};