import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { OButton2 } from '../../../../Components/Common/Button'
import { Header2 } from '../../../../Components/Common/HeaderText'
import ParaText from '../../../../Components/Common/ParaText'

interface props {
    data: any;
}

const TestCard = (props: props) => {

    return (
        <Card sx={{ width: {lg:'415px' , sm:'355px',xs:'355px'}, height: '485px', border: '1px solid #ccc', borderRadius: '3px', p: { md: '25px', sm: '15px', xs: '25px' }, boxShadow: '13px 13px 20px 1px rgba(0, 0, 0, 0.16)', mb: '30px' }} key={props.data.id}>
            <CardMedia
                sx={{ height: '317px', width: {sm: '301px', xs: '301px', lg:'361px' }, m: 'auto' }}
                image={props.data.images[0]}
            />
            <CardContent sx={{ py: '6px', px: 0 }}>
                <Header2 header={props.data.title} />
                <ParaText text={props.data.price} />
            </CardContent>
            <CardActions sx={{ p: '0px' }}>
                <OButton2 name='Add to cart' />
            </CardActions>
        </Card>
    )
}

export default TestCard
