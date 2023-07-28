import { Box, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { BButton2 } from "../../../Components/Common/Button";
import { Header1 } from "../../../Components/Common/HeaderText";
import SelectBox from "../../../Components/Common/Select";
import UseGet from "../../../Hooks/UseGet";
import { AppContext } from "../../../Context/AppContext";
import TestSection from "./components/TestCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { CartContext } from "../../../Context/CartContext";
import tokenAxios from "../../../Hooks/TokenAxios";

interface option {
  name: string;
  value: number;
}

const options: option[] = [
  { name: "OC Online Trial test", value: 1 },
  { name: "Selective Test", value: 2 },
];

const SecondSection = () => {
  const [selectVal, setSelectVal] = useState<number>(1);
  const { cart, setCart } = CartContext();
  const { user } = AppContext();
  const [val, setVal] = useState<number[]>([]);

  const { isLoading, data, refetch } = useQuery([selectVal],
    () => tokenAxios.get(`/get-product-data/${selectVal}`),
  );

  const { data: cdata ,isLoading:loading} = useQuery(
    [cart],
    () => tokenAxios.get(`/get-cart-data/${user?.id}`),
    {
      enabled: !!user,
    }
  );


  // useEffect(() => {
    
    // if (user && cart?.length === 0) {
      
    //   const temp = cdata?.data.cart_data?.map((item:any)=>{
    //     return item.tsp_id;
    //   });
    //   // setCart(temp);
    //   // setVal(temp);

    // }
    // }
    //  else {
    //   const temp = cart?.filter((item: any) => {
    //     return data?.product_data.map((element: any) => {
    //       if (element.id === item.tsp_id) {
    //         return item.tsp_id;
    //       }
    //     });
    //   });
    //   setVal(temp);
    // }
  // }, [cdata]);

  console.log(cart);

  // if (loading && user && !cdata) {
  //   return <LoadingBar />;
  // }
  
  if (isLoading || !cart) {
    return <LoadingBar />;
  }
  return (
    <>
      <Container
        maxWidth={false}
        sx={{ width: "98%", py: "15px" }}
        id="product"
      >
        <Box style={{ display: "flex", alignItems: "left", width: "100%" }}>
          <Header1 header="Buy Test Series" />
          <SelectBox
            name="choose test type"
            selectName="test_type"
            options={options}
            func={setSelectVal}
          />
        </Box>

        <Box
          sx={{
            display: "grid",
            my: "40px",
            gridTemplateColumns: {
              md: "auto auto",
              sm: "auto auto",
              lg: "auto auto auto",
              xs: "auto",
            },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {data?.data?.product_data &&
            data.data?.product_data.map((item: any, key: number) => { 
             
              
              return <TestSection data={item} key={key} val={cart?.includes(item?.id)} />;
            })}
        </Box>
      </Container>
      {/* <Box sx={{ width: "100%", height: "100px", textAlign: "center" }}>
        <Link to="/product">
          <BButton2 name="SHOW MORE" />
        </Link>
      </Box> */}
    </>
  );
};

export default SecondSection;
