import { Container, Box, Card, CardMedia, CardContent, CardActions, Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { OButton, WButton } from '../../../Components/Common/Button'
import { Header1 } from '../../../Components/Common/HeaderText'
import UseGet from '../../../Hooks/UseGet'
import LoadingBar from '../../../Components/Headers/LoadingBar';
import { ParaText1 } from '../../../Components/Common/ParaText'
const Product = () => {
  const params = useParams();
  const { isLoading, data, } = useQuery({
    queryKey: [params], queryFn: UseGet(`https://dummyjson.com/products/${params.id}`),
  })
console.log(data);

  if (isLoading) {
    return <LoadingBar />
  }
  return (
    <Container maxWidth='xl' sx={{ my: '50px' }}>
      <Header1 header={data?.title} />
        <Card sx={{ display:'flex', flexDirection:{sm:'row',xs:'column',md:'row',lg:'row'},my:'30px', justifyContent:'space-between',width:{lg:'900px',xs:'350px', md:'900px',sm:'700px'} ,boxShadow:'none',backgroundColor:'transparent'}} >
          <CardMedia
            sx={{ height: '330px',width:{lg:'400px',xs:'330px',sm:'400px',md:'400px'} }}
            image={data?.images[0]}
            title="green iguana"
          />
          <Stack spacing={{lg:9,md:9,sm:9,xs:4}}>
          <CardContent sx={{width:{lg:'400px',xs:'330px',sm:'400px',md:'400px'}}}>
          <Header1 header={data?.title} />
          <Header1 header={`Rs. ${data?.price}`} />
          <ParaText1 text="Description"/>
          <ParaText1 text={data?.description}/>
          </CardContent>
          <CardActions>
            <Stack spacing={8} direction="row" sx={{ maxWidth: '370px', }} >
              <Link to="/"> <WButton name="Back" css={{ width: '127px' }} /></Link>
              <OButton name="Checkout" />
            </Stack>
          </CardActions>
          </Stack>
        </Card>
 
    </Container>
  )
}

export default Product
