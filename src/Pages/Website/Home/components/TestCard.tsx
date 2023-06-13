import { Card, CardActions, CardContent, CardMedia, } from '@mui/material'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OButton2, WButton } from '../../../../Components/Common/Button'
import { Header2 } from '../../../../Components/Common/HeaderText'
import { ParaText1 } from '../../../../Components/Common/ParaText'
import { CartContext } from '../../../../Context/CartContext';

interface props {
    data: any;
}
type mapObject = {
    id:number
  }
const TestCard = (props: props) => {
    const { addToCart, cart } = CartContext();

    // useEffect(() => {
    //     console.log(cart);
        
    // }, [cart])
  
    const val = cart?.map((item: mapObject) => {
         return props.data.id === item.id;
     });
  

    
    return (
        <Card sx={{ width: { lg: '415px', md: '415px', sm: '355px', xs: '355px' }, 
        height: { lg: '495px', sm: '490px', xs: '490px', md: '490px' },
         border: '1px solid #ccc', borderRadius: '3px', p: { lg: '25px', md: '10px', sm: '15px', xs: '25px' },
          boxShadow: '13px 13px 20px 1px rgba(0, 0, 0, 0.16)', mb: '30px', mx: 'auto' }} >
            <Link to={`/product/${props.data.id}`} >
                <CardMedia
                sx={{ height: '317px', width: { sm: '301px', xs: '301px', md: '331px', lg: '361px' } }}
                image={props.data.images[0]} />
            <CardContent sx={{ py:'0px', px: { lg: 0, md: '27px' } }}>
                <Header2 header={props.data.title} />
                <ParaText1 text={props.data.price} />
            </CardContent> 
            </Link>
    

            <CardActions sx={{ py:'0px', }}>
                {
                      val.includes(true) ?
                        (<Link to="/cart" style={{width:'100%'}}><WButton name='Go to cart' type="button" 
                        css={{width:'100%'}} /></Link>)
                        :
                        (<OButton2 name='Add to cart' func={() => addToCart(props.data.id)} type="button" />)
                }
            </CardActions>
        </Card>
    )
}

export default TestCard
