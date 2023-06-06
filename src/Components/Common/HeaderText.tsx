import { Typography } from '@mui/material'
import React from 'react'

interface props {
  header:string
}

const Header1 = (props:props) => {
  return (
    <Typography
    
    sx={{
        fontSize:{xs:'18px',md:'24px'},
        fontWeight: 700,
        color:'#1E1E1E',
        mr:'50px'
    }}
>
  {props.header}
  </Typography>
  )
}

const Header2 = (props:props) => {
  return (
    <Typography
    
    sx={{
        fontSize:{xs:'18px',md:'16px'},
        fontWeight: 600,
        color:'#000000',
     
    }}
>
  {props.header}
  </Typography>
  )
}
export { Header1 , Header2}
