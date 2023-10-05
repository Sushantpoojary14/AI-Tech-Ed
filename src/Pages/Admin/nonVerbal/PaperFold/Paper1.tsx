import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
// import randomicon from "../../../../utils/randomicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faB } from "@fortawesome/free-solid-svg-icons";

import Canvas1 from "./component/Canvas1";
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
      <Stack direction={"row"} spacing={1}>
        {/* Box 1 */}
        <Canvas1 />
        <Box
          sx={{
            width: 100,
            height: 100,
            border: 1,
            borderColor: "black",
            backgroundColor: "yellow",
          }}
        />

        {/* Box 2 */}
        <Box
          sx={{
            width: 100,
            height: 100,
            border: 1,
            borderStyle: "dashed",
            borderColor: "black",
            backgroundColor: "yellow",
          }}
        />
        {/* Box 3 */}
        <Box
          sx={{
            width: 100,
            height: 100,
          }}
        >
          <Grid container>
            {/* Box 3.1 */}
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  border: 1,
                  borderStyle: "dashed dashed none dashed",
                  borderColor: "black",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: 50,
                    height: 50,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                  }}
                >
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                </Grid>
              </Box>
            </Grid>
            {/* Box 3.2 */}
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  border: 1,
                  borderStyle: "dashed dashed dashed none",
                  borderColor: "black",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: 50,
                    height: 50,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                  }}
                >
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                </Grid>
              </Box>
            </Grid>
            {/* Box 3.3 */}
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  border: 2,
                  borderColor: "black",
                  borderStyle: "solid",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: 50,
                    height: 50,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                  }}
                >
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                </Grid>
              </Box>
            </Grid>
            {/* Box 3.4 */}
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 50,
                  height: 50,

                  border: 1,
                  borderStyle: "none dashed dashed none",
                  borderColor: "black",
                }}
              >
                <Grid
                  container
                  sx={{
                    width: 50,
                    height: 50,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(3, 1fr)",
                  }}
                >
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  ></Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Grid item sx={{ width: "100%", height: "100%" }} />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
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
    "The following question consists of a set of three figures X, Y and Z showing a sequence of folding of a piece of paper. Fig (Z) shows the manner in which the folded paper has been cut. These three figures are followed by four answer figures from which you have to choose a figure which would most closely resemble the unfolded form fig. (Z).";
  question.correct_ans = correct_ans;
  // return question;
  // console.log(questionRefs);

  return Promise.resolve(question);
};

export default Paper1;
