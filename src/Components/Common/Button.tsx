import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

interface props {
  name?: string;
  func?: () => void;
}

const WButton = (props: props) => {
  return (
    <Button variant="contained"
      sx={{
        backgroundColor: '#F0F0F0',
        color: '#FA8128',
        borderRadius: '3px',
        height: '60px',
        width: '127px',
        fontSize:'16px',
        fontWeight:600,
        border: '1px solid #FA8128',
        '&:hover': {
          backgroundColor: '#FFFFFF ',
        },

      }} size="large" disableElevation onClick={props.func}>{props.name}</Button>
  )
}

const OButton = (props: props) => {
  return (
    <Button variant="contained" color='warning' sx={{
      backgroundColor: '#FA8128',
      borderRadius: '3px',
      height: '60px',
      width: '127px',
      fontSize:'16px',
      fontWeight:600,
      border: '1px solid #F0F0F0',
    }} size="large" disableElevation onClick={props.func}>{props.name} </Button>
  )
}

const BButton = (props: props) => {
  return (
    <Button variant="contained"  sx={{
      backgroundColor: '#FA8128',
      borderRadius: '0px',
      
    }} size="large" disableElevation onClick={props.func}>{props.name}</Button>
  )
}

const PIButton = (props: props) => {
  return (
    <Button sx={{
      color: '#FA8128',
      backgroundColor: '#FFFFFF',
      height: '60px',
      width: '60px',
      borderRadius: '3px',
      border: '1px solid #FA8128',
      '&:hover': {
      color: '#FFFFFF ',
      backgroundColor: '#FA8128'
      }
    }} color='warning' variant="outlined" size='small' onClick={props.func}><PersonIcon sx={{ height: '28px', width: '28px' }} /></Button>
  )
}

const SIButton = (props: props) => {
  return (
    <Button sx={{
      color: '#FA8128', 
      backgroundColor: '#FFFFFF', 
      border: '1px solid #FA8128',
      '&:hover': {
        color: '#FFFFFF ', 
        backgroundColor: '#FA8128'
      }, 
      
      height: '60px', 
      width: '60px'
    }} variant="outlined" size='small' color='warning' onClick={props.func}><SettingsIcon sx={{ height: '28px', width: '28px' }} /></Button>
  )
}

const OButton2 = (props: props) => {
  return (
    <Button variant="contained" color='warning' sx={{
      backgroundColor: '#FA8128',
      borderRadius: '3px',
      height: '60px',
      width: '360px',
      fontSize:'16px',
      fontWeight:600,
      border: '1px solid #F0F0F0',
      m:'auto'
    }} size="large" disableElevation onClick={props.func}>{props.name} </Button>
  )
}


const BButton2 = (props: props) => {
  return (
    <Button variant="contained"  sx={{
      backgroundColor: '#3A9BDC',
      color:'#FFFFFF',
      borderRadius: '3px',
      height: '60px',
      width: '360px',
      fontSize:'16px',
      fontWeight:600,
      border: '1px solid #FFFFFF',
      mx:'auto',
    }} size="large" disableElevation onClick={props.func}>{props.name} </Button>
  )
}
export { WButton, OButton, BButton, PIButton, SIButton ,OButton2, BButton2 }
