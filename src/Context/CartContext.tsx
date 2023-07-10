import { useMutation } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import axiosBaseURL from "../Hooks/BaseUrl";
import tokenAxios from "../Hooks/TokenAxios";


type mapObject = {
  id: number;
  quantity: 1;
};
interface MainContextProps {
  children: React.ReactNode;
}
interface ContextValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: boolean;
  addToCart: (id: number) => void;
  cart: Array<mapObject>;
  removeFromCart: (id: number) => void;
}

const defaultValue: ContextValue = {
  isLoading: false,
  setIsLoading: () => {},
  user: false,
  addToCart: (id: number) => {},
  cart: [],
  removeFromCart: (id: number) => {},
};

const Context = createContext<ContextValue>(defaultValue);

const MainCartContext: React.FC<MainContextProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  const storedCart = localStorage.getItem("product_id");
  const initialCart = storedCart ? JSON.parse(storedCart) : [];
  const [cart, setCart] = useState<Array<mapObject>>(initialCart);

  const CartData = useMutation({
    mutationFn: (formData: any) => {
      return axiosBaseURL.post("", formData);
    },
    onSettled: (data, error, variables, context) => {
      if (data) {
        console.log(data);
      }
    },
  });

  const addToCart = (id: number) => {
    const updatedCart: mapObject[] = [...cart, { id: id, quantity: 1 }];

    if (user === true) {
      CartData.mutate({
        userId: 5,
        products: updatedCart,
      });

      setCart(updatedCart);
    } else {
      setCart(updatedCart);
      localStorage.setItem("product_id", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (id: number) => {
    if (user == false) {
      let temp = cart.filter((item: mapObject) => {
        if (item.id != id) {
          return item;
        }
      });

      setCart(temp);
      localStorage.setItem("product_id", JSON.stringify(temp));
    }
  };

  return (
    <Context.Provider
      value={{ setIsLoading, isLoading, user, addToCart, cart, removeFromCart }}
    >
      {children}
    </Context.Provider>
  );
};

const CartContext = (): ContextValue => {
  return useContext(Context);
};
export { MainCartContext, CartContext };
