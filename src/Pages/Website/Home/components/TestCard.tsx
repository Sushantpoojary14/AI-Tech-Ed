import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { OButton2 } from '../../../../Components/Common/Button'
import { Header2 } from '../../../../Components/Common/HeaderText'
import {ParaText1} from '../../../../Components/Common/ParaText'

interface props {
    data: any;
}

const TestCard = (props: props) => {

    return (
        <Card sx={{ width: {lg:'415px' ,md:'415px', sm:'355px',xs:'355px'}, height: {lg:'485px', sm:'490px' ,xs:'485px', md:'490px'}, border: '1px solid #ccc', borderRadius: '3px', p: { lg:'25px',md: '10px', sm: '15px', xs: '25px' }, boxShadow: '13px 13px 20px 1px rgba(0, 0, 0, 0.16)', mb: '30px', mx: 'auto' }} key={props.data.id}>
            <CardMedia
                sx={{ height: '317px', width: {sm: '301px', xs: '301px', md:'331px', lg:'361px' } }}
                image={props.data.images[0]}
            />
            <CardContent sx={{ py: '6px', px: {lg:0,md:'27px'} }}>
                <Header2 header={props.data.title} />
                <ParaText1 text={props.data.price} />
            </CardContent>
            <CardActions sx={{ p: '0px' }}>
                <OButton2 name='Add to cart' />
            </CardActions>
        </Card>
    )
}

export default TestCard
