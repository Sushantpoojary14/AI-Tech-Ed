import { Box, Container, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, Button } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query';
import { OButton, OButton2, WButton } from '../../../Components/Common/Button';
import { Header1, Header2 } from '../../../Components/Common/HeaderText'
import { CartContext } from '../../../Context/CartContext';
import UseGet from '../../../Hooks/UseGet';
import { Link } from 'react-router-dom';
import LoadingBar from '../../../Components/Headers/LoadingBar';
import UsePost from '../../../Hooks/UsePost';
import { useEffect, useState } from 'react';
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
    const { cart, removeFromCart,user } = CartContext();
    const { isLoading, data, error, refetch } = useQuery({
        queryKey: [cart], queryFn: UseGet('https://dummyjson.com/products?limit=10'),
        enabled:user===false,
    });

    const { isLoading:userLoading, data:userData,  } = useQuery({
        queryKey: [cart], queryFn: UseGet('https://dummyjson.com/carts/user/5'),
        enabled:user===true,
    });

  
        let filter_data = [];
      
        if (data && user === false) {
          filter_data = data?.products.filter((i: any) => {
            return cart.some((o: any) => {
              if (i.id === o.id) {
                return true;
              }
            });
          });
        } else if (userData && user === true) {
          filter_data = userData.carts[0].products;
        }
      

      if (isLoading || userLoading) {
        return <LoadingBar />
    }

    
    return (
        <Container maxWidth='xl' sx={{ my: '50px' }}>
            <Header1 header="CHECKOUT CART" />
            <Box sx={{ m: '30px' }}>
                { 
                    filter_data.length != 0 &&
                    (<TableContainer sx={{ maxWidth: '770px', borderBottom: '1px solid ' }}>
                        <Table sx={{ width: '770px', }} >
                            <TableHead >
                                <TableRow >
                                    {tHead.map((item: string, key) => {
                                        return <TableCell align="center" key={key}>{item}</TableCell>
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filter_data.map((item: any, key: number) => {

                                    return (
                                        <TableRow key={key} >
                                            <TableCell align="center" sx={{ border: 'none' }}> {key + 1} </TableCell>
                                            <TableCell align="center" sx={{ border: 'none' }}>{item.title  }</TableCell>
                                            <TableCell align="center" sx={{ border: 'none' }}>{item.title}</TableCell>
                                            <TableCell align="center" sx={{ border: 'none' }}>{item.price}</TableCell>
                                            <TableCell align="center" sx={{ border: 'none' }}
                                                onClick={() => removeFromCart(item.id)}>Remove </TableCell>
                                        </TableRow>)
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>)
                }
            </Box>
            {filter_data.length !== 0 ?
                <Stack spacing={8} direction="row" sx={{ maxWidth: '770px', display: 'flex', justifyContent: 'center', }}>
                    <Link to="/"> <WButton name="Back" css={{ width: '127px' }} /></Link>
                    <OButton name="Checkout" />
                </Stack>
                :
                <Stack spacing={2} direction="column" sx={{ maxWidth: '370px', display: 'flex', textAlign: 'center', mx: 'auto' }} >
                    <Header2 header="No Item in cart" />
                    <Link to="/"><OButton2 name="Go to home" /></Link>

                </Stack>
            }
        </Container>
    )
}

export default Cart
