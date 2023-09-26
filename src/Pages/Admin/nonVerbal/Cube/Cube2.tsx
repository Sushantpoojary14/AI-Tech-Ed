import { Grid, Paper } from "@mui/material";
import imagetosvg from "../../../../utils/imagetosvg";
import randomicon from "../../../../utils/randomIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TBox = {
  height: "60px",
  width: "50px",
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
  width: "50px", //50
  borderRadius: 0,
  border: "1px solid ",
  paddingY: "10px",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};
const cube2 = async (paraData: any, index: number, questionRefs: any) => {
  //   console.log(index);
  const image_style = {
    width: "80%",
    height: "80%",
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
    let imageData = await randomicon();
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
      <div className="face top" style={Line}>
        <FontAwesomeIcon
          style={image_style}
          icon={ans[0].type.iconName}
          color={ans[0].color}
        />
      </div>
      <div className="face left" style={Line}>
        <FontAwesomeIcon
          style={image_style}
          icon={ans[1].type.iconName}
          color={ans[1].color}
        />
      </div>
      <div className="face front" style={Line}>
        <FontAwesomeIcon
          style={image_style}
          icon={ans[2].type.iconName}
          color={ans[2].color}
        />
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
            <FontAwesomeIcon
              style={image_style}
              icon={newData[0].type.iconName}
              color={newData[0].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[1].type.iconName}
              color={newData[1].color}
            />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[2].type.iconName}
              color={newData[2].color}
            />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[3].type.iconName}
              color={newData[3].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[4].type.iconName}
              color={newData[4].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[5].type.iconName}
              color={newData[5].color}
            />
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
            <FontAwesomeIcon
              style={image_style}
              icon={newData[2].type.iconName}
              color={newData[2].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[5].type.iconName}
              color={newData[5].color}
            />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[4].type.iconName}
              color={newData[4].color}
            />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[3].type.iconName}
              color={newData[3].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[0].type.iconName}
              color={newData[0].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[1].type.iconName}
              color={newData[1].color}
            />
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
            <FontAwesomeIcon
              style={image_style}
              icon={newData[5].type.iconName}
              color={newData[5].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[4].type.iconName}
              color={newData[4].color}
            />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[3].type.iconName}
              color={newData[3].color}
            />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[2].type.iconName}
              color={newData[2].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[1].type.iconName}
              color={newData[1].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[0].type.iconName}
              color={newData[0].color}
            />
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
            <FontAwesomeIcon
              style={image_style}
              icon={newData[2].type.iconName}
              color={newData[2].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[4].type.iconName}
              color={newData[4].color}
            />
          </Paper>
        </Grid>
        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[0].type.iconName}
              color={newData[0].color}
            />
          </Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[1].type.iconName}
              color={newData[1].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[3].type.iconName}
              color={newData[3].color}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
        <Grid item>
          <Paper style={TBox}></Paper>
        </Grid>

        <Grid item>
          <Paper style={DBox}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[5].type.iconName}
              color={newData[5].color}
            />
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
