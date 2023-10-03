import { Grid, Paper, Stack } from "@mui/material";
import randomicon from "../../../../utils/randomicon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { faB, fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
library.add(faB);
const TBox = {
  height: "60px",
  width: "60px",
  borderRadius: 0,
  border: 0,
  boxShadow: "0px 0px",
  opacity: 0.0,
};
const Line = {
  lineHeight: 0,
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};
const DBox = {
  height: "60px",
  width: "60px",
  borderRadius: 0,
  border: "0",
  padding: "0px",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};
const image_style = {
  width: "100%",
  height: "100%",
  margin: "auto",
  color: "#ffffff",
  border: 0,
  p: 16,
  backgroundColor: "#000000",
};
const cube5 = async (index: number, questionRefs: any) => {
  //   console.log(index);

  let newData: any = [];
  const options: any = [];

  let question: any = {};
  const tDiceIcons: IconName[] = [
    "dice-one",
    "dice-two",
    "dice-three",
    "dice-four",
    "dice-five",
    "dice-six",
  ];
  let diceIcons: IconName[] = [];

  for (let index = tDiceIcons.length - 1; index >= 0; index--) {
    const random = Math.floor(Math.random() * index);
    newData.push(tDiceIcons[random]);
    let temp = tDiceIcons[random];
    tDiceIcons[random] = tDiceIcons[index];
    tDiceIcons[index] = temp;
  }
  // for (let i = 5; i >= 0; i--) {
  //   let random = Math.floor(Math.random() * (i + 1));
  //   let imageData = randomicon();
  //   newData.push(imageData);
  // }
  let random = Math.floor(Math.random() * 6);
  let ans = [];
  let q = newData[random];
  if (random < 3) {
    ans.push(newData[random], newData[random + 1], newData[random + 2]);
    ans.push(newData[random + 1], newData[random + 2], newData[random + 3]);
  } else {
    ans.push(newData[random], newData[random - 1], newData[random - 2]);
    ans.push(newData[random - 1], newData[random - 2], newData[random - 3]);
  }
  console.log(q);
  let question_image = (
    <Stack
      ref={questionRefs.current[index].questionRef}
      flexDirection={"row"}
      justifyContent={"space-between"}
      width={"50%"}
      sx={{backgroundColor:"transparent"}}
    >
      <div className="cube" >
        <div className="face top" style={Line}>
          <FontAwesomeIcon
            style={image_style}
            icon={ans[0]}
            // color={ans[0].color}
          />
        </div>
        <div className="face left" style={Line}>
          <FontAwesomeIcon
            style={image_style}
            icon={ans[1]}
            // color={ans[1].color}
          />
        </div>
        <div className="face front" style={Line}>
          <FontAwesomeIcon
            style={image_style}
            icon={ans[2]}
            // color={ans[2].color}
          />
        </div>
      </div>
      <div className="cube" >
        <div className="face top" style={Line}>
          <FontAwesomeIcon
            style={image_style}
            icon={ans[3]}
            // color={ans[0].color}
          />
        </div>
        <div className="face left" style={Line}>
          <FontAwesomeIcon
            style={image_style}
            icon={ans[4]}
            // color={ans[1].color}
          />
        </div>
        <div className="face front" style={Line}>
          <FontAwesomeIcon
            style={image_style}
            icon={ans[5]}
            // color={ans[2].color}
          />
        </div>
      </div>
    </Stack>
  );

  // console.log(ans);
  let temp_options: any = [
    // <Grid
    //   container
    //   justifyContent="center"
    //   alignItems="center"
    //   ref={questionRefs.current[index].optionRefs[0]}
    //   sx={{ w: "40%", m: "auto", backgroundColor: "transparent" }}
    // >
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[0]}
    //           // color={newData[0].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[1]}
    //           // color={newData[1].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[2]}
    //           // color={newData[2].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[3].type.iconName}
    //           color={newData[3].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[4].type.iconName}
    //           color={newData[4].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[5].type.iconName}
    //           color={newData[5].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </Grid>,
    // <Grid
    //   container
    //   justifyContent="center"
    //   alignItems="center"
    //   ref={questionRefs.current[index].optionRefs[2]}
    //   sx={{ w: "100%", m: "auto", backgroundColor: "transparent" }}
    // >
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[2].type.iconName}
    //           color={newData[2].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[5].type.iconName}
    //           color={newData[5].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[4].type.iconName}
    //           color={newData[4].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[3].type.iconName}
    //           color={newData[3].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[0].type.iconName}
    //           color={newData[0].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[1].type.iconName}
    //           color={newData[1].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </Grid>,
    // <Grid
    //   container
    //   justifyContent="center"
    //   alignItems="center"
    //   ref={questionRefs.current[index].optionRefs[2]}
    //   sx={{ w: "50%", m: "auto", backgroundColor: "transparent" }}
    // >
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[5].type.iconName}
    //           color={newData[5].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[4].type.iconName}
    //           color={newData[4].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[3].type.iconName}
    //           color={newData[3].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[2].type.iconName}
    //           color={newData[2].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[1].type.iconName}
    //           color={newData[1].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[0].type.iconName}
    //           color={newData[0].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </Grid>,
    // <Grid
    //   container
    //   justifyContent="center"
    //   alignItems="center"
    //   ref={questionRefs.current[index].optionRefs[3]}
    //   sx={{ w: "50%", m: "auto", backgroundColor: "transparent" }}
    // >
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[2].type.iconName}
    //           color={newData[2].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[4].type.iconName}
    //           color={newData[4].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[0].type.iconName}
    //           color={newData[0].color}
    //         />
    //       </Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[1].type.iconName}
    //           color={newData[1].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[3].type.iconName}
    //           color={newData[3].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    //   <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
    //     <Grid item>
    //       <Paper style={TBox}></Paper>
    //     </Grid>
    //     <Grid item>
    //       <Paper style={DBox}>
    //         <FontAwesomeIcon
    //           style={image_style}
    //           icon={newData[5].type.iconName}
    //           color={newData[5].color}
    //         />
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </Grid>,
  ];
  let correct_ans = -1;
  for (let i = 3; i >= 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    if (random == 0 && correct_ans < 0) {
      correct_ans = 3 - i + 1;
    }
    options.push(temp_options[random]);
    let temp = temp_options[random];
    temp_options[random] = temp_options[i];
    temp_options[i] = temp;
  }
  question.question_image = question_image;
  question.options = options;
  question.question = `Two positions of a block are given below. When 1 is at the top, which number will be at the bottom?`;
  question.correct_ans = correct_ans;
  // return question;
  return Promise.resolve(question);
};

export default cube5;
