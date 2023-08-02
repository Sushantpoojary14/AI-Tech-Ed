import {
  Box,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  Button,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { OButton, OButton2, WButton } from "../../../Components/Common/Button";
import { Header1, Header2 } from "../../../Components/Common/HeaderText";
import { CartContext } from "../../../Context/CartContext";
import UseGet from "../../../Hooks/UseGet";
import { Link } from "react-router-dom";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { AppContext } from "../../../Context/AppContext";
import tokenAxios from "../../../Hooks/TokenAxios";
import axiosBaseURL from "../../../Hooks/BaseUrl";

function createData(
  srNo: number,
  courses: string,
  testSeries: string,
  price: string
) {
  return { srNo, courses, testSeries, price };
}
const tHead = ["Sr.No", "Courses", "Test Series", "Price", " "];

const Cart = () => {
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
  
  const { data: cdata, isLoading: Loading } = useQuery(
    [user,cart],
    () => tokenAxios.get(`/get-cart-data/${user?.id}`),
    {
      enabled: !!user,
    }
  );

  const { isLoading, data, refetch } = useQuery(
    [user,cart],
    () => axiosBaseURL.get(`/get-product-data`),
    { enabled: !user }
  );

  let filter_data = [];

  if (user) {
    filter_data = cdata?.data.cart_data.map((item: any) => {
      return item.ts_product;
    
    });
  } else {
    filter_data = data?.data.product_data.filter((item: any) => {
      return cart.includes(item.id);
    });
    
  }

  console.log(filter_data);

  if (isLoading && !user) {
    return <LoadingBar />;
  }

  // console.log("load"+Loading);
  if (Loading && !!user) {
    return <LoadingBar />;
  }
  return (
    <Container maxWidth="xl" sx={{ my: "50px" }}>
      <Header1 header="CHECKOUT CART" />
      <Box sx={{ m: "30px" }}>
        {filter_data?.length != 0 && (
          <TableContainer
            sx={{ maxWidth: "770px", borderBottom: "1px solid " }}
          >
            <Table sx={{ width: "770px" }}>
              <TableHead>
                <TableRow>
                  {tHead.map((item: string, key) => {
                    return (
                      <TableCell align="center" key={key}>
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {filter_data?.map((item: any, key: number) => {
                  return (
                    <TableRow key={key}>
                      <TableCell align="center" sx={{ border: "none" }}>
                     
                        {key + 1}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "none" }}>
                        {item.p_name}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "none" }}>
                        {item.p_description}
                      </TableCell>
                      <TableCell align="center" sx={{ border: "none" }}>
                        {item.p_price}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: "none" }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove{" "}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      {filter_data?.length !== 0 ? (
        <Stack
          spacing={8}
          direction="row"
          sx={{ maxWidth: "770px", display: "flex", justifyContent: "center" }}
        >
          <Link to="/">
            {" "}
            <WButton name="Back" css={{ width: "127px" }} />
          </Link>
          <OButton name="Checkout" />
        </Stack>
      ) : (
        <Stack
          spacing={2}
          direction="column"
          sx={{
            maxWidth: "370px",
            display: "flex",
            textAlign: "center",
            mx: "auto",
          }}
        >
          <Header2 header="No Item in cart" />
          <Link to="/">
            <OButton2 name="Go to home" />
          </Link>
        </Stack>
      )}
    </Container>
  );
};

export default Cart;
