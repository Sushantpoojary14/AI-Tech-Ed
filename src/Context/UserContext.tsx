import React, { createContext, Dispatch, useContext, useEffect, useReducer, useState } from 'react';

interface MainContextProps {
  children: React.ReactNode;
}

interface Action {
  type: string;
  payload: any;
}

interface ContextValue {
  open: boolean;
  values: string;
  dataSubmit: boolean;
  openMenu: boolean;
  openPC: boolean;
  openPC2: boolean;
  openSuccess: boolean;
  openPE: boolean;
  openPE2: boolean;
  openPESuccess:boolean;
  handleClickOpen: (val: string) => void;
  handleClose: () => void;
  dispatch: Dispatch<Action>;
  handleMenuOpen: () => void;
  handleMenuClose: () => void;
  handlePCClose: () => void;
  handlePCOpen: () => void;
  handlePC2Open: () => void;
  handlePC2Close: () => void;
  handleSubmit: () => void;
  handleSuccessOpen: () => void;
  handleSuccessClose: () => void;
  handlePEOpen: () => void;
  handlePEClose: () => void;
  handlePE2Open: () => void;
  handlePE2Close: () => void;
  handlePESuccessOpen:()=>void;
  handlePESuccessClose:()=>void;
}


type State = {
  open: boolean;
  values: string;
  openMenu: boolean;
  openPC: boolean;
  openPC2: boolean;
  dataSubmit: boolean;
  openSuccess: boolean;
  openPE: boolean;
  openPE2: boolean;
  openPESuccess: boolean;
};



const defaultValue: ContextValue = {
  openMenu: false,
  open: false,
  values: "1",
  openPC: false,
  openPC2: false,
  dataSubmit: false,
  openSuccess: false,
  openPE: false,
  openPE2: false,
  openPESuccess:false,
  dispatch: () => { },
  handleClickOpen: (val) => { },
  handleClose: () => { },
  handleMenuOpen: () => { },
  handleMenuClose: () => { },
  handlePCOpen: () => { },
  handlePCClose: () => { },
  handlePC2Open: () => { },
  handlePC2Close: () => { },
  handleSubmit: () => { },
  handleSuccessOpen: () => { },
  handleSuccessClose: () => { },
  handlePEOpen: () => { },
  handlePEClose: () => { },
  handlePE2Open: () => { },
  handlePE2Close: () => { },
  handlePESuccessOpen:()=>{},
  handlePESuccessClose:()=>{},
};

const initialState = {
  open: false,
  values: '1',
  openMenu: false,
  openPC: false,
  openPC2: false,
  dataSubmit: false,
  openSuccess: false,
  openPE: false,
  openPE2: false,
  openPESuccess: false,
};


const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_OPEN':
      return { ...state, open: action.payload };
    case 'SET_openMenu':
      return { ...state, openMenu: action.payload };
    case 'SET_openPC':
      return { ...state, openPC: action.payload };
    case 'SET_openPC2':
      return { ...state, openPC2: action.payload };
    case 'SET_openSuccess':
      return { ...state, openSuccess: action.payload };
    case 'SET_dataSubmit':
      return { ...state, dataSubmit: action.payload };
    case 'SET_openPE':
      return { ...state, openPE: action.payload };
    case 'SET_openPE2':
      return { ...state, openPE2: action.payload };
    case 'SET_openPESuccess':
      return { ...state, openPESuccess: action.payload };
    case 'SET_VALUES':
      return { ...state, values: action.payload };
    default:
      return state;
  }
};
const Context = createContext<ContextValue>(defaultValue);

const MainUserContext: React.FC<MainContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { open, values, openMenu, openPC, openPC2, dataSubmit, openSuccess, openPE, openPE2, openPESuccess } = state;

  const handleClickOpen = (val: string) => {
    dispatch({ type: 'SET_VALUES', payload: val });
    dispatch({ type: 'SET_OPEN', payload: true });
  };
  const handleMenuOpen = () => {
    dispatch({ type: 'SET_openMenu', payload: true });
  };

  const handleClose = () => {
    dispatch({ type: 'SET_OPEN', payload: false });
  };

  const handleMenuClose = () => {

    dispatch({ type: 'SET_openMenu', payload: false });
  };

  const handlePCOpen = () => {
    dispatch({ type: 'SET_openPC', payload: true });
  };
  const handlePCClose = () => {
    dispatch({ type: 'SET_openPC', payload: false });
  };

  const handlePC2Open = () => {
    dispatch({ type: 'SET_openPC2', payload: true });
  };

  const handlePC2Close = () => {
    dispatch({ type: 'SET_openPC2', payload: false });

  };

  const handleSubmit = () => {
    dispatch({ type: 'SET_dataSubmit', payload: true });

  };

  const handleSuccessOpen = () => {
    dispatch({ type: 'SET_openSuccess', payload: true });
  };

  const handleSuccessClose = () => {
    dispatch({ type: 'SET_openSuccess', payload: false });
  };

  const handlePESuccessOpen = () => {
    dispatch({ type: 'SET_openPESuccess', payload: true });
  };

  const handlePESuccessClose = () => {
    dispatch({ type: 'SET_openPESuccess', payload: false });
  };
  const handlePEOpen = () => {
    dispatch({ type: 'SET_openPE', payload: true });
  };

  const handlePEClose = () => {
    dispatch({ type: 'SET_openPE', payload: false });
  };

  const handlePE2Open = () => {
    dispatch({ type: 'SET_openPE2', payload: true });
  };

  const handlePE2Close = () => {
    dispatch({ type: 'SET_openPE2', payload: false });
  };

  return (
    <Context.Provider value={{
      open, handleClickOpen, handleClose, handleMenuOpen, handleMenuClose, values, dispatch, openMenu, handlePCClose, handlePCOpen, openPC, openPC2, handlePC2Close, handlePC2Open, dataSubmit, handleSubmit, openSuccess, handleSuccessClose, handleSuccessOpen, handlePEClose, handlePEOpen, openPE, openPE2, handlePE2Close, handlePESuccessClose,handlePE2Open, handlePESuccessOpen,openPESuccess
    }}>
      {children}
    </Context.Provider>
  )
}
const UserContext = (): ContextValue => {
  return useContext(Context);
};
export { MainUserContext, UserContext }
