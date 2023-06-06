import { Typography } from '@mui/material'
import React from 'react'

interface props {
  text:string
}
const ParaText = (props:props) => {
  return (
    <Typography
    
    sx={{
        fontSize:'16px',
        fontWeight: 400,
        color:'#000000',
    }}
>
  {props.text}
  </Typography>
  )
}

export default ParaText
