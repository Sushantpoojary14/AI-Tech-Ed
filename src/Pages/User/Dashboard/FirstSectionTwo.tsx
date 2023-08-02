import {
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Header1 } from "../../../Components/Common/HeaderText";
import { TableHeader } from "../../../Components/Common/Table";
import { AppContext } from "../../../Context/AppContext";
import { CartContext } from "../../../Context/CartContext";
import tokenAxios from "../../../Hooks/TokenAxios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const header = ["Sr. No", "Test name", "Duration", "Price", ""];

const FirstSectionTwo = () => {
  const queryClient = useQueryClient();
  const { cart, removeFromCart } = CartContext();
  const { user } = AppContext();

  const purchaseMU = useMutation({
    mutationFn: async (p_id: number ) => {
      return await tokenAxios.post(`add-user-purchase`, {
        p_id: p_id,
      });
    },
    onSuccess: (res) => {
      console.log(res);
      
    
    },
    onError:(err)=>{
      console.log(err);
      
    }
  });

  const { data, isLoading } = useQuery(
    [user, cart,purchaseMU.isSuccess],
    () => tokenAxios.get(`/get-cart-data/${user?.id}`),
  );
  return (
    <Container maxWidth="xl">
      <Header1 header="Test Series Purchases" />
      <Card sx={{ boxShadow: "5px 5px 20px 0px #808080", my: "15px" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHeader header={header} />
            <TableBody>
              {data?.data.cart_data.map((item: any, key: number) => {
                console.log(item.tsp_id);
                
                return (
                  <TableRow key={key}>
                    <TableCell align="center" sx={{ border: 0 }}>
                      {key + 1}
                    </TableCell>
                    <TableCell align="center" sx={{ border: 0 }}>
                      {item.ts_product.p_name}
                    </TableCell>
                    <TableCell align="center" sx={{ border: 0 }}>
                      {item.ts_product.duration}
                    </TableCell>
                    <TableCell align="center" sx={{ border: 0 }}>
                      {item.ts_product.p_price}
                    </TableCell>
                    <TableCell align="center" sx={{ border: 0 }}>
                      <ShoppingCartIcon
                        sx={{ width: "25px", height: "25px", color: "#3A9BDC" }}
                        onClick={()=>purchaseMU.mutate(item.tsp_id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default FirstSectionTwo;
