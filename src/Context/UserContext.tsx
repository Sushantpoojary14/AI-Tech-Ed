import React, { createContext, useContext, useEffect, useState } from 'react';

interface MainContextProps {
    children: React.ReactNode;
  }
interface ContextValue {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleClickOpen:(val:string)=>void;
    handleClose:()=>void;
   
  }
  
  const defaultValue: ContextValue = {
    open: false,
    setOpen: () => {},
    handleClickOpen:() => {},
    handleClose:() => {},
   
 
  };
  
const Context = createContext<ContextValue>(defaultValue);

const MainUserContext: React.FC<MainContextProps> = ({ children }) => {
    
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    console.log(open);
    
  },[open])


  const handleClickOpen =  () => {
    console.log('open');
    // setValue(e);
    setOpen(true);
  }; 

  const handleClose = () => {
    setOpen(false);
  }
  
  return (
    <Context.Provider value={{ open, setOpen,handleClickOpen,handleClose }}>
    {children}
  </Context.Provider>
  )
}
const UserContext = ():ContextValue => {
    return useContext(Context);
  };
export  {MainUserContext,UserContext}
