import React, { createContext, useContext, useState } from 'react';

interface MainContextProps {
    children: React.ReactNode;
  }
interface ContextValue {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open2: boolean;
    setOpen2: React.Dispatch<React.SetStateAction<boolean>>;
    handleClickOpen:(val:string)=>void;
    handleClose:()=>void;
   
  }
  
  const defaultValue: ContextValue = {
    open: false,
    setOpen: () => {},
    open2: false,
    setOpen2: () => {},
    handleClickOpen:(val:string) => {},
    handleClose:() => {},
   
 
  };
  
const Context = createContext<ContextValue>(defaultValue);

const MainUserContext: React.FC<MainContextProps> = ({ children }) => {
    
    const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen =  () => {
    // console.log(e);
    // setValue(e);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }


  
  return (
    <Context.Provider value={{ open, setOpen,open2,setOpen2,handleClickOpen,handleClose }}>
    {children}
  </Context.Provider>
  )
}
const UserContext = ():ContextValue => {
    return useContext(Context);
  };
export  {MainUserContext,UserContext}
