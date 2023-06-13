import React, { createContext, useContext, useEffect, useState } from 'react';

interface MainContextProps {
    children: React.ReactNode;
  }
interface ContextValue {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleClickOpen:(val:string)=>void;
    handleClose:()=>void;
    values :string;
    setValues:React.Dispatch<React.SetStateAction<string>>;
  }
  
  const defaultValue: ContextValue = {
    open: false,
    setOpen: () => {},
    handleClickOpen:(val) => {},
    handleClose:() => {},
    values :"1",
    setValues:()=>{}
 
  };
  
const Context = createContext<ContextValue>(defaultValue);

const MainUserContext: React.FC<MainContextProps> = ({ children }) => {
    
  const [open, setOpen] = useState(false);
  const [values ,  setValues] = useState("1");




  const handleClickOpen =  (val:string) => {
    setValues(val);
    setOpen(true);
  }; 

  const handleClose = () => {
    setOpen(false);
  }
  
  return (
    <Context.Provider value={{ open, setOpen,handleClickOpen,handleClose,values ,setValues }}>
    {children}
  </Context.Provider>
  )
}
const UserContext = ():ContextValue => {
    return useContext(Context);
  };
export  {MainUserContext,UserContext}
