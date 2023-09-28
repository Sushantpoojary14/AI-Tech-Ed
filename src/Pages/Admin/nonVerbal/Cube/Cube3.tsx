import React from "react";
import { Grid, Paper } from "@mui/material";
import { fas, faB } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    color:"#ffffff",
    borderRadius: 0,
    backgroundColor:"#000000"
  };
const Cube3 = (index:number, questionRefs:any):any => {
    let eArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    let diceArray = [];
    for(let i = 0 ; i<6 ;i++){
        
    }
     
    let question: any = {};
  let question_image = (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        ref={questionRefs.current[index].questionRef}
      >
        {}
        {/* <Grid
          item
          xs={12}
          sm={5}
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
                  icon={"dice-one"}
             
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
            <Grid item>
              <Paper style={DBox}>
                <FontAwesomeIcon
                  style={image_style}
                  icon={"dice-one"}
                  className="dice-icon"
                />
              </Paper>
            </Grid>
            <Grid item>
              <Paper style={DBox}>
                <FontAwesomeIcon
                  style={image_style}
                  icon={"dice-two"}
               
                />
              </Paper>
            </Grid>

            <Grid item>
              <Paper style={DBox}>
                <FontAwesomeIcon
                  style={image_style}
                  icon={"dice-three"}
                  
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
                  icon={"dice-five"}
                  
                
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
                  icon={"dice-six"}
               
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    );
  
  const diceIcons = [
    "dice-one",
    "fa-dice-two",
    "fa-dice-three",
    "fa-dice-four",
    "fa-dice-five",
    "fa-dice-six",
  ];
  question.question_image = question_image
//  = (
//     <div>
//       <FontAwesomeIcon icon={"dice-one"} size="2x" color="black" />
//     </div>
//   );
  return question;
};

export default Cube3;
