const answered = {
  position: "relative",
  width: "30px",
  height: "30px",
  backgroundColor: "#2C9806",
  py: "3px",
  // clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  textAlign: "center",

  // "&::before, &::after": {
  //   content: '""',
  //   position: "absolute",
  //   width: 0,
  //   height: 0,
  // },
  // "&::before": {
  //   borderLeft: "50px solid transparent",
  //   borderRight: "50px solid transparent",
  //   borderBottom: "87px solid #2C9806",
  //   top: "-43px",
  //   left: "0",
  // },
  // "&::after": {
  //   borderLeft: "50px solid transparent",
  //   borderRight: "50px solid transparent",
  //   borderTop: "87px solid #2C9806",
  //   bottom: "-43px",
  //   left: "0",
  // },
};

const notAnswered = {
  position: "relative",
  width: "30px",
  height: "30px",
  backgroundColor: "#B93826",
  // clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  textAlign: "center",
  py: "3px",
  // transform: "rotate(180deg)",
  // "&::before, &::after": {
  //   content: '""',
  //   position: "absolute",
  //   width: 0,
  //   height: 0,
  // },
  // "&::before": {
  //   borderLeft: "50px solid transparent",
  //   borderRight: "50px solid transparent",
  //   borderBottom: "87px solid #B93826",
  //   top: "-43px",
  //   left: "0",
  // },
  // "&::after": {
  //   borderLeft: "50px solid transparent",
  //   borderRight: "50px solid transparent",
  //   borderTop: "87px solid #B93826",
  //   bottom: "-43px",
  //   left: "0",
  // },
};

const notVisited = {
  position: "relative",
  width: "30px",
  height: "30px",
  backgroundColor: "#D9D9D9",
  textAlign: "center",
  py: "3px",
};

const markFR = {
  position: "relative",
  width: "30px",
  height: "30px",
  backgroundColor: "#820AA0",
  textAlign: "center",
  py: "3px",
  borderRadius: "100%",
};
const answeredMarkFR = {
  position: "relative",
  width: "30px",
  height: "30px",
  backgroundColor: "#2C9806",
  textAlign: "center",
  py: "3px",
  borderRadius: "100%",
};
const whiteText = {
  fontSize: "16px",
  fontWeight: 400,
  color: "#FFFFFF",
};
export { answered, notAnswered, markFR, answeredMarkFR, notVisited, whiteText };
