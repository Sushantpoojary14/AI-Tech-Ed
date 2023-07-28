import { Card, Container, Table, TableContainer } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Header1 } from '../../../Components/Common/HeaderText';
import { TableHeader } from '../../../Components/Common/Table';
import { AppContext } from '../../../Context/AppContext';
import { CartContext } from '../../../Context/CartContext';
import tokenAxios from '../../../Hooks/TokenAxios';

const header =['Test name','Price',''];

const FirstSectionTwo = () => {
    const { cart, removeFromCart } = CartContext();
    const { user } = AppContext();
    const { data: cdata, isLoading: Loading } = useQuery(
      [user,cart],
      () => tokenAxios.get(`/get-cart-data/${user?.id}`),
      {
        enabled: !!user,
      }
    );
  
  return (
    <Container maxWidth="xl">
            <Header1 header="PERFORMANCE ANALYSIS" />
            <Card sx={{ boxShadow: '5px 5px 20px 0px #808080', my: '15px' }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }}>
                            <TableHeader header={header}/>
                            
                    </Table>
                </TableContainer>
            </Card>
        </Container>
  )
}

export default FirstSectionTwo
