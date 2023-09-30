import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import randomicon from "../../../../utils/randomIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faB } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
library.add(faB);

const outerSquare = {
  width: "300px", // Set the desired width of the outer square
  height: "300px", // Set the desired height of the outer square
  border: `2px solid black`, // Light color border
  display: "flex",
  wrap: "wrap",
  justifyContent: "center",
};
const innerSquare = {
  width: "50%", // Each inner square takes up 50% of the outer square
  height: "50%", // Each inner square takes up 50% of the outer square
  border: `1px solid green`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const gridItem = {
  border: `1px solid black`,
  padding: "1rem",
  textAlign: "center",
};

const Paper1 = async (index: number, questionRefs: any) => {
  //   const i = Math.floor(Math.random() * 4) + 5;
  const shapes: any = [
    "circle",
    "play",
    "star",
    "star-half",
    "heart",
    "diamond",
  ];

  let newData: any = [];
  const options: any = [];

  let question: any = {};

  for (let j = 0; j < 6; j++) {
    const random = Math.floor(Math.random() * shapes.length);
    newData.push(shapes[random]);
  }
  console.log("icons", newData);
  let question_image = (
    <Stack px={1} ref={questionRefs.current[index].questionRef}>
      <Box
        sx={{
          width: 200,
          height: 200,
          border: "1px",
          borderColor: "yellow",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 100,
                height: 100,
                backgroundColor: "white",
              }}
            >
              <Grid
                container
                sx={{
                  width: 100,
                  height: 100,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                }}
              >
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                ></Grid>
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 100,
                height: 100,
                backgroundColor: "green",
              }}
            >
              <Grid
                container
                sx={{
                  width: 100,
                  height: 100,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                }}
              >
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                ></Grid>
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 100,
                height: 100,
                backgroundColor: "black",
              }}
            >
              <Grid
                container
                sx={{
                  width: 100,
                  height: 100,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                }}
              >
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                ></Grid>
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 100,
                height: 100,
                backgroundColor: "orange",
              }}
            >
              <Grid
                container
                sx={{
                  width: 100,
                  height: 100,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                }}
              >
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                ></Grid>
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
                <Grid
                  item
                  sx={{ width: "100%", height: "100%", bgcolor: "blueviolet" }}
                />
                <Grid item sx={{ width: "100%", height: "100%" }} />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box>
        {shapes.map((item: string, index: number) => (
          <Box>
            <FontAwesomeIcon
              icon={shapes[index]}
            />
          </Box>
        ))}
      </Box> */}
    </Stack>
  );

  //   let temp_options = [
  //     <Box
  //       ref={questionRefs.current[index].optionRefs[0]}
  //       sx={{ transform: "scaleY(-1)", display: "inline-block" }}
  //     >
  //       {newData.map((item: string) => (
  //         <Box>
  //           <FontAwesomeIcon
  //             //   style={image_style}
  //             icon={newData[0]}
  //             //   color={ans[0].color}
  //           />
  //         </Box>
  //       ))}
  //     </Box>,
  //     <Box
  //       ref={questionRefs.current[index].optionRefs[1]}
  //       sx={{ transform: "scaleY(-1)", display: "inline-block" }}
  //     >
  //       {newData.map((item: string, key: number) => {
  //         if (key === 2) {
  //           return (
  //             <Box
  //               sx={{
  //                 display: "inline-block",

  //                 transform: "scaleY(-1)",
  //               }}
  //             >
  //               <Typography variant="h5" component={"span"} fontWeight={"bolder"}>
  //                 {item}
  //               </Typography>
  //             </Box>
  //           );
  //         }
  //         if (key === 4) {
  //           return (
  //             <Box
  //               sx={{
  //                 display: "inline-block",

  //                 transform: "scaleY(-1)",
  //               }}
  //             >
  //               <Typography variant="h5" component={"span"} fontWeight={"bolder"}>
  //                 {item}
  //               </Typography>
  //             </Box>
  //           );
  //         }
  //         return (
  //           <Box sx={{ display: "inline-block" }}>
  //             <Typography variant="h5" component={"span"} fontWeight={"bolder"}>
  //               {item}
  //             </Typography>
  //           </Box>
  //         );
  //       })}
  //     </Box>,
  //     <Box
  //       ref={questionRefs.current[index].optionRefs[2]}
  //       sx={{ transform: "scaleY(-1)", display: "inline-block" }}
  //     >
  //       {newData.map((item: string, key: number) => {
  //         if (key === 3) {
  //           return (
  //             <Box
  //               sx={{
  //                 display: "inline-block",

  //                 transform: "scaleY(-1)",
  //               }}
  //             >
  //               <Typography variant="h5" component={"span"} fontWeight={"bolder"}>
  //                 {item}
  //               </Typography>
  //             </Box>
  //           );
  //         }
  //         return (
  //           <Box sx={{ display: "inline-block" }}>
  //             <Typography variant="h5" component={"span"} fontWeight={"bolder"}>
  //               {item}
  //             </Typography>
  //           </Box>
  //         );
  //       })}
  //     </Box>,
  //     <Box
  //       ref={questionRefs.current[index].optionRefs[3]}
  //       sx={{ transform: "scaleX(-1)", display: "inline-block" }}
  //     >
  //       {newData.map((item: string) => (
  //         <Box sx={{ display: "inline-block" }}>
  //           <Typography variant="h5" component={"span"} fontWeight={"bolder"}>
  //             {item}
  //           </Typography>
  //         </Box>
  //       ))}
  //     </Box>,
  //   ];

  let correct_ans = -1;
  //   for (let i = 3; i >= 0; i--) {
  //     let random = Math.floor(Math.random() * (i + 1));
  //     if (random == 0 && correct_ans < 0) {
  //       correct_ans = 3 - i + 1;
  //     }
  //     options.push(temp_options[random]);
  //     let temp = temp_options[random];
  //     temp_options[random] = temp_options[i];
  //     temp_options[i] = temp;
  //   }
  question.question_image = question_image;
  question.options = options;
  question.question =
    "Choose the alternative which is closely resembles the water-image of the given combination:";
  question.correct_ans = correct_ans;
  // return question;
  // console.log(questionRefs);

  return Promise.resolve(question);
};

export default Paper1;
