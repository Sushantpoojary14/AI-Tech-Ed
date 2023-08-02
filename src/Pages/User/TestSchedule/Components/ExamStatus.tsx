import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  answered,
  answeredMarkFR,
  notAnswered,
  markFR,
  notVisited,
  whiteText,
} from "../../../../Assets/Css/TestStatus";

interface props {
  questions: any;
  func: any;
}
const ExamStatus = (props: props) => {

  let count =0;
  return (
    <Stack spacing={2} direction="column">
  {props.questions &&
    Array.from({ length: Math.ceil(props.questions.length / 5) }).map(
      (row, rowIndex) => (
        <Stack
          key={rowIndex}
          spacing={7}
          direction="row"
          justifyContent="center" 
        >
          {props.questions
            .slice(rowIndex * 5, rowIndex * 5 + 5)
            .map((item:any, key:number) => {
              
              count++;
              const val = item.status_id;
              // console.log(val);
              
              if (val === 1) {
                return (
                  <Box
                    key={key}
                    sx={answered}
                    onClick={() => {
                      props.func(item.id, key);
                    }}
                  >
                    <Typography
                      sx={{
                        // zIndex: "5",
                        // position: "absolute",
                        // top: "16%",
                        // left: "25%",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                      }}
                    >
                      {count}
                    </Typography>
                  </Box>
                );
              } else if (val === 2) {
                return (
                  <Box
                    key={key}
                    sx={notAnswered}
                    onClick={() => {
                      props.func(item.id, key);
                    }}
                  >
                    <Typography
                      sx={{
                        // zIndex: "5",
                        // position: "absolute",
                        // top: "16%",
                        // left: "30%",
                        // transform: "rotate(180deg)",
                        fontSize: "16px",
                        fontWeight: 400,
                        
                        color: "#FFFFFF",
                      }}
                    >
                      {count}
                    </Typography>
                  </Box>
                );
              } else if (val === 3) {
                return (
                  <Box
                    key={key}
                    sx={notVisited}
                    onClick={() => {
                      props.func(item.id, key);
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#000000",
                      }}
                    >
                      {count}
                    </Typography>
                  </Box>
                );
              } else if (val === 4) {
                return (
                  <Box
                    key={key}
                    sx={markFR}
                    onClick={() => {
                      props.func(item.id, key);
                    }}
                  >
                    <Typography sx={whiteText}>{count + 1}</Typography>
                  </Box>
                );
              } else if (val === 5) {
                return (
                  <Box
                    key={key}
                    sx={answeredMarkFR}
                    onClick={() => {
                      props.func(item.id, key);
                    }}
                  >
                    <Typography sx={whiteText}>{count}</Typography>
                  </Box>
                );
              } else {
                return null; 
              }
            })}
        </Stack>
      )
    )}
</Stack>

    // <Stack spacing={7} direction="column">
      
    //   {props.questions?.map((item: any, key: number) => {
    //     const val = item.status_id;
    //     <Stack >

    //     </Stack>
    //     if (val === 1) {
    //       return (
    //         <Box
    //           key={key}
    //           sx={answered}
    //           onClick={() => {
    //             props.func(item.id, key);
    //           }}
    //         >
    //           <Typography
    //             sx={{
    //               zIndex: "5",
    //               position: "absolute",
    //               top: "16%",
    //               left: "36%",
    //               fontSize: "16px",
    //               fontWeight: 400,
    //               color: "#FFFFFF",
    //             }}
    //           >
    //             {key + 1}
    //           </Typography>
    //         </Box>
    //       );
    //     } else if (val === 2) {
    //       return (
    //         <Box
    //           key={key}
    //           sx={notAnswered}
    //           onClick={() => {
    //             props.func(item.id, key);
    //           }}
    //         >
    //           <Typography
    //             sx={{
    //               zIndex: "5",
    //               position: "absolute",
    //               top: "16%",
    //               left: "36%",
    //               transform: "rotate(180deg)",
    //               fontSize: "16px",
    //               fontWeight: 400,
    //               color: "#FFFFFF",
    //             }}
    //           >
    //             {key + 1}
    //           </Typography>
    //         </Box>
    //       );
    //     } else if (val === 3) {
    //       return (
    //         <Box
    //           key={key}
    //           sx={notVisited}
    //           onClick={() => {
    //             props.func(item.id, key);
    //           }}
    //         >
    //           <Typography
    //             sx={{
    //               fontSize: "16px",
    //               fontWeight: 400,
    //               color: "#000000",
    //             }}
    //           >
    //             {key + 1}
    //           </Typography>
    //         </Box>
    //       );
    //     } else if (val === 4) {
    //       return (
    //         <Box
    //           key={key}
    //           sx={markFR}
    //           onClick={() => {
    //             props.func(item.id, key);
    //           }}
    //         >
    //           <Typography sx={whiteText}>{key + 1}</Typography>
    //         </Box>
    //       );
    //     } else if (val === 5) {
    //       return (
    //         <Box
    //           key={key}
    //           sx={answeredMarkFR}
    //           onClick={() => {
    //             props.func(item.id, key);
    //           }}
    //         >
    //           <Typography sx={whiteText}>{key + 1}</Typography>
    //         </Box>
    //       );
    //     } else {
    //       return null; 
    //     }
    //   })}
    // </Stack>
  );
};

export default ExamStatus;
