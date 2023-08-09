import { Box, Stack, Typography } from "@mui/material";
import { text } from "node:stream/consumers";
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
  let count = 1;
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
                .map((item: any, key: number) => {
                  const uniqueKey = rowIndex * 5 + key;

                  const val = item.status_id;
                  let boxStyle = null;
                  let textContent = null;
                  let text = null;
                  if (val === 1) {
                    boxStyle = answered;
                    text = whiteText;
                    textContent = count.toString();
                  } else if (val === 2) {
                    boxStyle = notAnswered;
                    text = whiteText;
                    textContent = count.toString();
                  } else if (val === 3) {
                    boxStyle = notVisited;
                    text = {
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#000000",
                    };
                    textContent = count.toString();
                  } else if (val === 4) {
                    text = whiteText;
                    boxStyle = markFR;
                    textContent = count.toString();
                  } else if (val === 5) {
                    text = whiteText;
                    boxStyle = answeredMarkFR;
                    textContent = count.toString();
                  }

                  count++;
                  // const val = item.status_id;
                  // console.log(val);

                  // if (val === 1) {
                  //   return (
                  //     <Box
                  //       key={count}
                  //       sx={answered}
                  //       onClick={() => {
                  //         props.func(item.id, count-1);
                  //       }}
                  //     >
                  //       <Typography
                  //         sx={whiteText }
                  //       >
                  //         {count}
                  //       </Typography>
                  //     </Box>
                  //   );
                  // } else if (val === 2) {
                  //   return (
                  //     <Box
                  //       key={count}
                  //       sx={notAnswered}
                  //       onClick={() => {
                  //         props.func(item.id, count-1);
                  //       }}
                  //     >
                  //       <Typography
                  //         sx={whiteText }
                  //       >
                  //         {count}
                  //       </Typography>
                  //     </Box>
                  //   );
                  // } else if (val === 3) {
                  //   return (
                  //     <Box
                  //       key={count}
                  //       sx={notVisited}
                  //       onClick={() => {
                  //         props.func(item.id,count-1);
                  //       }}
                  //     >
                  //       <Typography
                  //         sx={{
                  //           fontSize: "16px",
                  //           fontWeight: 400,
                  //           color: "#000000",
                  //         }}
                  //       >
                  //         {count}
                  //       </Typography>
                  //     </Box>
                  //   );
                  // } else if (val === 4) {
                  //   return (
                  //     <Box
                  //       key={count}
                  //       sx={markFR}
                  //       onClick={() => {
                  //         props.func(item.id,count-1);
                  //       }}
                  //     >
                  //       <Typography sx={whiteText}>{count}</Typography>
                  //     </Box>
                  //   );
                  // } else if (val === 5) {
                  //   return (
                  //     <Box
                  //       key={count}
                  //       sx={answeredMarkFR}
                  //       onClick={() => {
                  //         props.func(item.id, count-1);
                  //       }}
                  //     >
                  //       <Typography sx={whiteText}>{count}</Typography>
                  //     </Box>
                  //   );
                  // } else {
                  //   return null;
                  // }
                  return (
                    <Box
                      key={uniqueKey} // Use the unique key here
                      sx={boxStyle}
                      onClick={() => {
                        props.func(item.id, uniqueKey); // Pass the unique key as the second argument
                      }}
                    >
                      <Typography sx={text}>{textContent}</Typography>
                    </Box>
                  );
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
