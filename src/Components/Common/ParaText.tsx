import { Typography } from '@mui/material';

interface props {
  text:string;
  css?:object;
}
const ParaText1 = (props:props) => {
  return (
    <Typography
    
    sx={{
        ...props.css,
        fontSize:'16px',
        fontWeight: 400,
        color:'#000000',
    }}
>
  {props.text}
  </Typography>
  )
}
const ParaText2 = (props:props) => {
  return (
    <Typography
    
    sx={{
        ...props.css,
        fontSize:'20px',
        fontWeight: 500,
        color:'#FFFFFF',
    }}
>
  {props.text}
  </Typography>
  )
}


export { ParaText1, ParaText2}
