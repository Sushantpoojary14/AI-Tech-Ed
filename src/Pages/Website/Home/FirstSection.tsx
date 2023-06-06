import { Button, Paper } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img1 from '../../../../src/Assets/images/img1.jpg';
import img2 from'../../../../src/Assets/images/img2.jpg';
import img3 from  '../../../../src/Assets/images/img3.jpg';
interface props {
    item: any
}

const FirstSection = () => {
    var items = [
        {
            image: img1
        },
        {
            image: img2
        },
        {
            image: img3
        }
    ]

    return (
        <Carousel
            NextIcon={< ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosNewIcon />}
            IndicatorIcon = {<CircleIcon   sx={ {
                    mx:'7px', 
                    height:{ md:'19px' ,xs:'12px'}, 
                    width: { md:'20px' ,xs:'12px'}
                } } />}

            sx={{width:'95%',height : { xs:'300px',sm:'20%'},py:2,margin:'auto' }}

            indicatorIconButtonProps={{
                style: {
                    color: '#3A9BDC',
              
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor:'#FA8128',
                    color: '#FA8128', // 2,
                    paddingRight:'25px',
                    paddingLeft:'25px',
                    borderRadius:12

                }
            }}
            indicatorContainerProps={{ style: { padding:'10px'   }}}>
            {
                items.map((item, i) => <Item key={i} item={item.image} />)
            }
        </Carousel>
    )
}
function Item(props: props) {

    return (
        <Paper >
            <img src={props.item} alt=""  style={{height:'100%', width:'100%'}}/>
        </Paper>
    )
}
export default FirstSection

