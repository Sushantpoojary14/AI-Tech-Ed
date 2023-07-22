import { Card, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ParaText1 } from "../../../../Components/Common/ParaText";
import img1 from "../../../../Assets/images/Icon/answered.jpg";
import img2 from "../../../../Assets/images/Icon/not_answered.jpg";
import img3 from "../../../../Assets/images/Icon/not_visted.jpg";
import img4 from "../../../../Assets/images/Icon/Review.jpg";
import { BButton2 } from "../../../../Components/Common/Button";

interface props {
  questions: any;
  func:any;
}

const ExamSecondSection = (props: props) => {
  console.log(props.questions);
  
  return (
    <Card
      sx={{
        boxShadow: "6px 6px 20px 0px #808080",
        mb: "15px",
        // display: "flex",
        // flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
        paddingY: "25px",
        width: "435px",
      }}
    >
      <Box sx={{ paddingX: "20px" }}>
        <Stack direction="row" spacing={2} marginBottom="10px">
          <img src={img1} style={{ width: "30px", height: "30px" }} />
          <ParaText1 text="Answered" />
        </Stack>
        <Stack direction="row" spacing={2} marginBottom="10px">
          <img src={img2} style={{ width: "30px", height: "30px" }} />
          <ParaText1 text="Not Answered" />
        </Stack>
        <Stack direction="row" spacing={2} marginBottom="10px">
          <img src={img3} style={{ width: "30px", height: "30px" }} />
          <ParaText1 text="Not Visited" />
        </Stack>
        <Stack direction="row" spacing={2} marginBottom="10px">
          <img src={img4} style={{ width: "30px", height: "30px" }} />
          <ParaText1 text="Marked for Review" />
        </Stack>
        <Stack direction="row" spacing={2} marginBottom="10px">
          <img src={img4} style={{ width: "30px", height: "30px" }} />
          <ParaText1 text="Answered And Marked for Review" />
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "30px",
          marginY: "10px",
          backgroundColor: "#3A9BDC",

          "&:hover": {
            backgroundColor: "#3A9BDC",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      ></Box>
      <Stack paddingX={"20px"} spacing={2} width={"400px"}>
        <Stack spacing={7} direction={"row"}>
          {props.questions?.map((item: any, key: number) => {
            const val = item.status_id;
            if (val === 1) {
              return (
                <Box
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
                <Box
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

                  onClick={()=>{props.func(1)}}
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
                <Box
                  sx={{
                    position: "relative",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#D9D9D9",
                    textAlign: "center",
                    py: "3px",
                  }}
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
              }
          })}
        </Stack>
        <BButton2 name="Submit Test" />
      </Stack>
    </Card>
  );
};

export default ExamSecondSection;
/* Rectangle 224 */
