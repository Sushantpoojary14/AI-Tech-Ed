import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
interface props {
    questions: any;
    func:any;
  }
const ExamStatus = (props:props) => {
 
  return (
    <Stack spacing={7} direction={"row"}>
          {props.questions?.map((item: any, key: number) => {
             
            const val = parseInt(item.status_id);
            // {console.log(val == 3,val,parseInt(item.status_id))}

            if (val === 1) {
             
              return (
               
                <Box key={key}
                sx={{
                  position: "relative",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "#2C9806",
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  textAlign: "center",
                  transform: "rotate(180deg)",
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    width: 0,
                    height: 0,
                  },
                  "&::before": {
                    borderLeft: "50px solid transparent",
                    borderRight: "50px solid transparent",
                    borderBottom: "87px solid #2C9806",
                    top: "-43px",
                    left: "0",
                  },
                  "&::after": {
                    borderLeft: "50px solid transparent",
                    borderRight: "50px solid transparent",
                    borderTop: "87px solid #2C9806",
                    bottom: "-43px",
                    left: "0",
                  },
                }}
                onClick={()=>{props.func(item.q_id)}}
              >
                <Typography
                  sx={{
                    zIndex: "5",
                    position: "absolute",
                    top: "16%",
                    left: "36%",
                    transform: "rotate(180deg)",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#FFFFFF",
                  }}
                >
                  {key + 1}
                </Typography>
              </Box>
               
              )
            } else if (val === 2) {
              return (
                <Box key={key}
                  sx={{
                    position: "relative",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#B93826",
                    clipPath:
                      "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                    textAlign: "center",
                    transform: "rotate(180deg)",
                    "&::before, &::after": {
                      content: '""',
                      position: "absolute",
                      width: 0,
                      height: 0,
                    },
                    "&::before": {
                      borderLeft: "50px solid transparent",
                      borderRight: "50px solid transparent",
                      borderBottom: "87px solid #B93826",
                      top: "-43px",
                      left: "0",
                    },
                    "&::after": {
                      borderLeft: "50px solid transparent",
                      borderRight: "50px solid transparent",
                      borderTop: "87px solid #B93826",
                      bottom: "-43px",
                      left: "0",
                    },
                  }}

                  onClick={()=>{props.func(item.q_id)}}
                >
                  <Typography
                    sx={{
                      zIndex: "5",
                      position: "absolute",
                      top: "16%",
                      left: "36%",
                      transform: "rotate(180deg)",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    {key + 1}
                  </Typography>
                </Box>
              )
            } else if (val === 3) {
            
              return (
                <Box key={key}
                  sx={{
                    position: "relative",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#D9D9D9",
                    textAlign: "center",
                    py: "3px",
                  }}
                  onClick={()=>{props.func(item.q_id)}}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {key + 1}
                  </Typography>
                </Box>
                
              );
            } else if (val === 4) {
              return (
                <Box key={key}
                  sx={{
                    position: "relative",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#820AA0",
                    textAlign: "center",
                    py: "3px",
                    borderRadius: "100%",
                  }}
                  onClick={()=>{props.func(item.q_id)}}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    {key + 1}
                  </Typography>
                </Box>
              );
            }
            else if (val === 5) {
                return (
                  <Box
                    sx={{
                      position: "relative",
                      width: "30px",
                      height: "30px",
                      backgroundColor: "#820AA0",
                      textAlign: "center",
                      py: "3px",
                      borderRadius: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                      }}
                    >
                      {key + 1}
                    </Typography>
                  </Box>
                );
              }else{
                <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                {key + 1}
              </Typography>
              }
          })}
        </Stack>
  )
}

export default ExamStatus
