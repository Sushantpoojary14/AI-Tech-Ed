import { Grid, Paper } from "@mui/material";
import imagetosvg from "../../../../utils/imagetosvg";

const TBox = {
  height: "60px",
  width: "50px",
  borderRadius: 0,
  border: 0,
  boxShadow: "0px 0px",
  opacity: 0.0,
};
const DBox = {
  height: "60px",
  width: "50px",
  borderRadius: 0,
  border: "1px solid ",
  paddingY: "10px",
};
const cube2 = async (paraData: any, index: number, questionRefs: any) => {
//   console.log(index);
  const image_style = {
    width: "59px",
    height: "57px",
    margin: "auto",
  };
  let newData: any = [];
  const options: any = [];

  if (!(paraData && paraData?.length == 6)) {
    return null;
  }

  let question: any = {};
  for (let i = 5; i >= 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let imageData = await imagetosvg(paraData[random]);
    newData.push(imageData);
    let temp = paraData[random];
    paraData[random] = paraData[i];
    paraData[i] = temp;
  }
  let random = Math.floor(Math.random() * 6);
  let ans = [];
  if (random < 3) {
    ans.push(newData[random + 1], newData[random + 2], newData[random + 3]);
  } else {
    ans.push(newData[random - 1], newData[random - 2], newData[random - 3]);
  }
  let question_image = (
    <div className="cube" ref={questionRefs.current[index].questionRef}>
      <div className="face top">
        <img src={`${ans[0]}`} alt="" style={image_style} />
      </div>
      <div className="face left">
        <img src={`${ans[1]}`} alt="" style={image_style} />
      </div>
      <div className="face front">
        <img src={`${ans[2]}`} alt="" style={image_style} />
      </div>
    </div>
  );

  // console.log(ans);
  let temp_options = [
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      ref={questionRefs.current[index].optionRefs[0]}
      sx={{ w: "40%", m: "auto", backgroundColor: "transparent" }}
    >
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[0]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[1]} alt="" style={image_style} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[2]} alt="" style={image_style} />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[3]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[4]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[5]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>,
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      ref={questionRefs.current[index].optionRefs[2]}
      sx={{ w: "100%", m: "auto", backgroundColor: "transparent" }}
    >
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[2]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[5]} alt="" style={image_style} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[4]} alt="" style={image_style} />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[3]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[0]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[1]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>,
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      ref={questionRefs.current[index].optionRefs[2]}
      sx={{ w: "50%", m: "auto", backgroundColor: "transparent" }}
    >
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[5]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[4]} alt="" style={image_style} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[3]} alt="" style={image_style} />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[2]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[1]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[0]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>,
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      ref={questionRefs.current[index].optionRefs[3]}
      sx={{ w: "50%", m: "auto", backgroundColor: "transparent" }}
    >
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[2]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[4]} alt="" style={image_style} />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <img src={newData[0]} alt="" style={image_style} />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[1]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[3]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <img src={newData[5]} alt="" style={image_style} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>,
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
  question.question =
    "You are required to determine which of the cubes could be formed by folding the following figure:";
  question.correct_ans = correct_ans;
  // return question;
  return Promise.resolve(question);
};

export default cube2;
