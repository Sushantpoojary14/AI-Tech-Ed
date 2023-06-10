import {useState,useEffect}from 'react'
import { Box, LinearProgress } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';


interface props{
    isLoading:boolean;
}
const LoadingBar = (props:props) => {
    const [progress, setProgress] = useState<number>(0);
    const [val, setVal] = useState<boolean>(false);
    useEffect(() => {

        if (props.isLoading) {
          setProgress(50);
            setVal(true);
        } else {
          setProgress(70);
          const timeout = setInterval(() => {
            setProgress(100);
          }, 500);
          setVal(false);
          
        
        }
      
      }, [props.isLoading]);

      
      
  return (
    <>
      {
      val == true ? 
        <Box key="progress" sx={{ width: '100%' , position:'fixed' }}>
          <LinearProgress variant="determinate" value={progress} color="warning" sx={{
            height:'6px'
          }}/>
        </Box>
      : 
      ''
    }
    </>
  );
}

export default LoadingBar
