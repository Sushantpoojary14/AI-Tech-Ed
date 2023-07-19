import { useMutation, useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import axiosBaseURL from "../Hooks/BaseUrl";
import tokenAxios from "../Hooks/TokenAxios";
import { AppContext } from "./AppContext";



interface MainContextProps {
  children: React.ReactNode;
}
interface ContextValue {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (id: number) => void;
  cart: Array<number>;
  setCart:React.Dispatch<React.SetStateAction<Array<number>>>;
  removeFromCart: (id: number) => void;
  addToCartFL:(id:number)=>void;
}

const defaultValue: ContextValue = {
  isLoading: false,
  setIsLoading: () => {},
  addToCart: (id: number) => {},
  cart: [],
  setCart:() => {},
  removeFromCart: (id: number) => {},
  addToCartFL:(id:number)=>{}
};

const Context = createContext<ContextValue>(defaultValue);

const MainCartContext: React.FC<MainContextProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {user}=  AppContext();

  const { data} = useQuery(
    [user],
    () => tokenAxios.get(`/get-cart-data/${user?.id}`),
    {
      enabled: !!user,
    }
  );
   
  
  let temp = data?.data.cart_data?.map((item: any) => {
    return item.tsp_id;
  });
  
  const storedCart = localStorage.getItem("product_id");
  const initialCart = storedCart ? JSON.parse(storedCart) : temp ?? [];
  const [cart, setCart] = useState<Array<number>>(initialCart);
  

  useEffect(()=>{
    setCart(initialCart)
  },[data])
  console.log(cart);
  const CartData = useMutation({
    mutationFn: (formData: any) => {
      console.log(formData);
     
      return tokenAxios.post("/add-to-cart", formData);
    },
    
    onSettled: (data, error, variables, context) => {
      if (data) {
        console.log(data);
      }
    },
  });
  const CartRemove = useMutation({
    mutationFn: (id: number) => {
      return tokenAxios.get(`/remove-from-cart/${id}`);
    },
    
    onSuccess: (res) => {
     
      let temp = cart.filter((item: number) => {
        if (item != res.data.id) {
          return item;
        }
      });
      setCart(temp);
    },
  })

  const addToCart = (id: number) => {
    const updatedCart: number[] = [...(cart ? [...cart,id] : [id])];
    setCart(updatedCart);
    if (user) {
      CartData.mutate({
        u_id: user?.id,
        p_id: id,
      });
      
      
    } else {

      localStorage.setItem("product_id", JSON.stringify(updatedCart));
    }
  };

  const addToCartFL = (id:number) => {
    
    if(cart){

      CartData.mutate({
        u_id: id,
        p_id: cart,
      });
    }

      localStorage.removeItem("product_id");
  };

  const removeFromCart = (id: number) => {
    console.log(id);
    
    let temp = cart.filter((item: number) => {
      if (item != id) {
        return item;
      }
    });

    if (!user) {
      setCart(temp);
      localStorage.setItem("product_id", JSON.stringify(temp));
    }
    else{
      CartRemove.mutate(id);
       
    }
  };

  return (
    <Context.Provider
      value={{ setIsLoading, isLoading, addToCart, cart,setCart, removeFromCart,addToCartFL }}
    >
      {children}
    </Context.Provider>
  );
};

const CartContext = (): ContextValue => {
  return useContext(Context);
};
export { MainCartContext, CartContext };
