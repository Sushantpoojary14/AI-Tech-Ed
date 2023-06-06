import { useStepContext } from '@mui/material/Step';
import React, { createContext, useContext, useState } from 'react';


interface MainContextProps {
  children: React.ReactNode;
}
interface ContextValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ContextValue = {
  isLoading: false,
  setIsLoading: () => {},
};

const Context = createContext<ContextValue>(defaultValue);

const MainContext: React.FC<MainContextProps>  = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Context.Provider value={{ setIsLoading, isLoading }}>
      {children}
    </Context.Provider>
  );
};

const AppContext = ():ContextValue => {
  return useContext(Context);
};
 export  {MainContext , AppContext};