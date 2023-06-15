import { Typography } from '@mui/material';

interface props {
  text:string;
  css?:object;
  func?:()=>void;
}
const ParaText1 = (props:props) => {
  return (
    <Typography
    onClick={props.func}
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
    onClick={props.func}
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
const ParaText3 = (props:props) => {
  return (
    <Typography
    onClick={props.func}
    sx={{
        ...props.css,
        fontSize:'16px',
        fontWeight: 550,
        color:'#000000',
    }}
>
  {props.text}
  </Typography>
  )
}

export { ParaText1, ParaText2,ParaText3}
