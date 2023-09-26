import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import imagetosvg from "../../../../utils/imagetosvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import randomicon from "../../../../utils/randomIcon";

const TBox = {
  height: "60px",
  width: "60px",
  borderRadius: 0,
  border: 0,
  boxShadow: "0px 0px",
  opacity: 0.0,
};
const DBox = {
  height: "60px",
  width: "60px",
  borderRadius: 0,
  border: "1px solid ",
  paddingY: "10px",
};
const mirror1 = async (paraData: any, index: number, questionRefs: any) => {
  // console.log(index);
  const image_style = {
    width: "30px",
    height: "30px",
    margin: "10",
  };
  let newData: any = [];
  const options: any = [];

  let question: any = {};
  for (let i = 3; i >= 0; i--) {
    const random = Math.floor(Math.random() * 1954);
    let imageData = randomicon();
    newData.push(imageData);
    let temp = paraData[random];
    paraData[random] = paraData[i];
    paraData[i] = temp;
  }
  let degree = [0, 90, 180, 270];
  const rd = Math.floor(Math.random() * 4);
  // console.log(randDegree);

  let question_image = (
    <Stack
      justifyItems={"center"}
      ref={questionRefs.current[index].questionRef}
      height="140px"
      width="130px"
    >
      <Box
        sx={{ transform: `rotate(${degree[rd]}deg)`, backgroundColor: "white" }}
      >
        <Grid
          sx={{
            maxWidth: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            rowGap: "2px",
            border: "1px solid black",
            // padding: "10px",
            justifyItems: "center",
            height: "130px",
            width: "130px",
            margin: "0 auto",

            // transform: " translateZ(30px)"
          }}
        >
          <Box sx={{ width: "50px" }}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[0].type.iconName}
              color={newData[0].color}
            />
          </Box>

          <Box sx={{ width: "50px" }}></Box>
          <Box sx={{ width: "50px" }}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[1].type.iconName}
              color={newData[1].color}
            />
            {/* <img src={newData[2]} alt="" style={image_style} /> */}
          </Box>
          <Box sx={{ width: "50px" }}>
            <FontAwesomeIcon
              style={image_style}
              icon={newData[2].type.iconName}
              color={newData[2].color}
            />
          </Box>
        </Grid>
        <Divider
          sx={{
            backgroundColor: "transparent",
            width: "128px",
            margin: "0 auto",
            border: "1px solid #000000",
            marginY: "5px",
          }}
        />
      </Box>
    </Stack>
  );
  let ans: number = 0;
  if (rd < 2) {
    ans = rd + 1;
  } else {
    ans = rd - 1;
  }
  const newDegree = degree.filter((item, key) => {
    return key != rd;
  });

  let temp_options = [
    <Box
      sx={{ transform: `rotate(${degree[ans]}deg)`, backgroundColor: "white" }}
      ref={questionRefs.current[index].optionRefs[0]}
    >
      <Grid
        sx={{
          maxWidth: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "2px",
          border: "1px solid black",
          // padding: "10px",
          justifyItems: "center",
          height: "130px",
          width: "130px",
          margin: "0 auto",

          // transform: " translateZ(30px)"
        }}
      >
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[0].type.iconName}
            color={newData[0].color}
          />
          {/* <img src={newData[0]} alt="" style={image_style} /> */}
        </Box>

        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[1].type.iconName}
            color={newData[1].color}
          />
        </Box>
        <Box sx={{ width: "50px" }}></Box>
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[2].type.iconName}
            color={newData[2].color}
          />
        </Box>
      </Grid>
    </Box>,
    <Box
      sx={{ transform: `rotate(${newDegree[2]}deg)`, backgroundColor: "white" }}
      ref={questionRefs.current[index].optionRefs[1]}
    >
      <Grid
        sx={{
          maxWidth: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "2px",
          border: "1px solid black",
          // padding: "10px",
          justifyItems: "center",
          height: "130px",
          width: "130px",
          margin: "0 auto",

          // transform: " translateZ(30px)"
        }}
      >
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[2].type.iconName}
            color={newData[2].color}
          />
        </Box>

        <Box sx={{ width: "50px" }}></Box>
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[1].type.iconName}
            color={newData[1].color}
          />
        </Box>
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[0].type.iconName}
            color={newData[0].color}
          />
        </Box>
      </Grid>
    </Box>,
    <Box
      sx={{ transform: `rotate(${newDegree[0]}deg)`, backgroundColor: "white" }}
      ref={questionRefs.current[index].optionRefs[2]}
    >
      <Grid
        sx={{
          maxWidth: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "2px",
          border: "1px solid black",
          // padding: "10px",
          justifyItems: "center",
          height: "130px",
          width: "130px",
          margin: "0 auto",

          // transform: " translateZ(30px)"
        }}
      >
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[0].type.iconName}
            color={newData[0].color}
          />
        </Box>

        <Box sx={{ width: "50px" }}></Box>
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[1].type.iconName}
            color={newData[1].color}
          />
        </Box>
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[2].type.iconName}
            color={newData[2].color}
          />
        </Box>
      </Grid>
    </Box>,
    <Box
      sx={{ transform: `rotate(${newDegree[1]}deg)`, backgroundColor: "white" }}
      ref={questionRefs.current[index].optionRefs[3]}
    >
      <Grid
        sx={{
          maxWidth: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          rowGap: "2px",
          border: "1px solid black",
          // padding: "10px",
          justifyItems: "center",
          height: "130px",
          width: "130px",
          margin: "0 auto",

          // transform: " translateZ(30px)"
        }}
      >
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[0].type.iconName}
            color={newData[0].color}
            size="2xl"
          />
        </Box>

        <Box sx={{ width: "50px" }}></Box>
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[1].type.iconName}
            color={newData[1].color}
          />
        </Box>
        <Box sx={{ width: "50px" }}>
          <FontAwesomeIcon
            style={image_style}
            icon={newData[2].type.iconName}
            color={newData[2].color}
          />
        </Box>
      </Grid>
    </Box>,
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
  // console.log(questionRefs);

  return Promise.resolve(question);
};

export default mirror1;
