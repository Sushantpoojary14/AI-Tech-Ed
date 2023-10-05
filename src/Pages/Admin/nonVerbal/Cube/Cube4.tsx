import React from "react";
import { Grid, Paper, Stack } from "@mui/material";
import { fas, faB } from "@fortawesome/free-solid-svg-icons";
import { Icon, IconName, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ParaText1 } from "../../../../Components/Common/ParaText";
import randomicon from "../../../../utils/randomicon";
library.add(fas);
library.add(faB);
const TBox = {
  height: "40px",
  width: "40px",
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
  height: "40px",
  width: "40px",
  borderRadius: 0,
  border: "1px solid #000000",
  padding: "0px",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};
const image_style = {
  width: "50%",
  height: "50%",
  margin: "auto",
  color: "#red",
  border: 0,

  p: 16,
};

// 6 - [5,7, 9,2,4,6][1,3,5,6,8,10],2-[1,2,3,9,10,11],[3,4,5,7,8,9]
const Cube4 = (index: number, questionRefs: any): any => {
  let eArray: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let diceArray: number[] = []; //[0,1,2,3,4,5]
  let value = 0;
  // randomicon()
  const random = Math.floor(Math.random() * 4);
  const shapeRandom = Math.floor(Math.random() * 2);
  let row = 0;
  let col = 0;
  let new_option: Array<number[]> = [];

  if (random == 1) {
    const arr = [
      [2, 4, 6, 5, 7, 9],
      [1, 3, 5, 6, 8, 10],
    ];
    row = 6;
    col = 2;
    new_option = [
      [1, 5, 6],
      [2, 3, 4],
      [3, 2, 1],
      [4, 3, 2],
    ];
    diceArray = arr[shapeRandom];
  } else if (random == 0) {
    const arr = [
      [1, 2, 3, 9, 10, 11],
      [3, 4, 5, 7, 8, 9],
    ];
    row = 2;
    col = 6;
    new_option = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 2, 1],
      [4, 3, 2],
    ];
    diceArray = arr[shapeRandom];
  } else if (random == 2) {
    const arr = [
      [1, 2, 5, 8, 11, 12],
      [2, 3, 5, 8, 11, 10],
    ];
    row = 4;
    col = 3;
    new_option = [
      [1, 2, 3],
      [2, 3, 4],
      [3, 2, 1],
      [4, 3, 2],
    ];
    diceArray = arr[shapeRandom];
  } else {
    const arr = [
      [1, 5, 6, 7, 8, 12],
      [4, 5, 6, 7, 8, 9],
    ];
    row = 3;
    col = 4;
    const arr2 = [
      [
        [1, 5, 6],
        [8, 7, 12],
        [12, 7, 8],
        [6, 5, 1],
      ],
      [
        [4, 7, 8],
        [7, 8, 4],
        [9, 5, 6],
        [6, 5, 9],
      ],
    ];
    new_option = arr2[shapeRandom]
    diceArray = arr[shapeRandom];
  }
  console.log(random, diceArray);
  let diceIcons: IconName[] = [];
  // for (let i = 3; i > 0; i--) {
  //   let random = Math.floor(Math.random() * (i + 1));
  //   let imageData:IconName[] =  ["1", "2", "3", "4", "5", "6"];
  //   diceIcons.push(imageData[random]);
  // }
  let tDiceIcons: IconName[] = ["1", "2", "3", "4", "5", "6"];
  for (let index = tDiceIcons.length - 1; index >= 0; index--) {
    const random = Math.floor(Math.random() * index);
    diceIcons.push(tDiceIcons[random]);
    let temp = tDiceIcons[random];
    tDiceIcons[random] = tDiceIcons[index];
    tDiceIcons[index] = temp;
  }

  // console.log(diceIcons);

  let question: any = {};
  const randomAns = Math.floor(Math.random() * 4) + 1;
  let val = -1;
  let OptionAns: any = [];
  let OptionRan: any = [];
  let qArr: number[] = [];
  let tempArr = diceArray.slice();

  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * (tempArr.length - i));
    const temp = tempArr[random];
    qArr.push(tempArr[random]);
    tempArr[random] = tempArr[tempArr.length - 1 - i];
    tempArr[tempArr.length - 1 - i] = temp;
  }

  for (let index = 0; index < 4; index++) {
    const random = Math.floor(Math.random() * (3 - index));

    if (index < randomAns) {
      OptionAns.push([
        diceArray[new_option[random][0]],
        diceArray[new_option[random][1]],
        diceArray[new_option[random][2]],
      ]);
    } else {
      OptionRan.push([
        diceArray[new_option[random][0]],
        diceArray[new_option[random][2]],
        diceArray[new_option[random][1]],
      ]);
    }

    // Swap elements in arr
    const temp = new_option[random];
    new_option[random] = new_option[3 - index];
    new_option[3 - index] = temp;
  }
  // console.log(index);
  // console.log(diceArray);
  const all_option = OptionAns.concat(OptionRan);
  console.log(qArr, diceArray, OptionAns, all_option);
  let correct_ans: number[] = [];
  let correct_option: number[] = [];
  let ans = "";
  let temp_options: string[] = [];
  const options: any = [];
  // for (let i = 3; i >= 0; i--) {
  //   let random = Math.floor(Math.random() * (i + 1));
  //   if (OptionAns.length <= options.length) {
  //     // console.log(3 - i);

  //     correct_option.push(3 - i);
  //   }
  //   options.push(all_option[random]);
  //   let temp = all_option[random];
  //   all_option[random] = all_option[i];
  //   all_option[i] = temp;
  // }
  // console.log(options);
  let count = 0;

  let question_image = (
    <Grid
      container
      flexDirection={"row"}
      justifyContent="space-between"
      alignItems="center"
      width={"100%"}
      ref={questionRefs.current[index].questionRef}
    >
      <Grid item sx={{ m: "auto", backgroundColor: "transparent" }}>
        {eArray.slice(0, row).map((rowItem:any, rowIndex:any) => {
          // console.log(rowIndex * col, (rowIndex + 1) * col);
          return (
            <Grid container sx={{ w: "100%", m: "auto" }} key={rowIndex}>
              {eArray
                .slice(rowIndex * col, (rowIndex + 1) * col)
                .map((colItem:any, colIndex:any) => {
                  // console.log(colItem);
                  const dice = diceArray.find(
                    (item: number) => item === colItem
                  );

                  if (dice) {
                    const icon:number = qArr.findLastIndex(
                      (item: number) => item === colItem
                    );
                    // console.log(icon);

                    return (
                      <Grid item key={colIndex}>
                        <Paper style={DBox}>
                          {colItem}
                          {/* {icon > -1 && (
                            <FontAwesomeIcon
                              icon={diceIcons[icon]}
                              style={image_style}
                            ></FontAwesomeIcon>
                          )} */}
                        </Paper>
                      </Grid>
                    );
                  } else {
                    return (
                      <Grid item key={colIndex}>
                        <Paper style={TBox}> {colItem}</Paper>
                      </Grid>
                    );
                  }
                })}
            </Grid>
          );
        })}
        <ParaText1 text="(x)" css={{ textAlign: "center", my: "10px" }} />
      </Grid>
      <Grid>
        <Stack flexDirection={"row"}>
          {all_option.map((rowItem: number[], rowIndex: number) => {
            // console.log(rowIndex * col, (rowIndex + 1) * col);
            // if (rowIndex < OptionAns.length) {
            // console.log(diceIcons[1]);
            let oCount = 0;
            const icon:any = qArr.findLastIndex(
              (item: any) => item === rowItem[0]
            );
            const icon2:any= qArr.findLastIndex(
              (item: any) => item === rowItem[1]
            );
            const icon3:any = qArr.findLastIndex(
              (item: any) => item === rowItem[2]
            );
            // // console.log( icon, icon2, icon3);
            let newArr = [icon, icon2, icon3].map(
              (item: any) => {
                if (item && item === qArr[0]) {
                  return 0;
                } else if (item && item === qArr[1]) {
                  return 1;
                } else if (item && item === qArr[2]) {
                  return 2;
                }
                return null;
              }
            );

            console.log(newArr, [icon, icon2, icon3]);

            return (
              <Stack>
                <Grid container sx={{ w: "100%", m: "auto" }} key={rowIndex}>
                  <div
                    className="cube2"
                    ref={questionRefs.current[index].questionRef}
                    key={index}
                  >
                    <div className="face2 top2" style={Line}>
                      {/* {rowItem[0]} */}
                      {!!(icon > -1) && (
                        <FontAwesomeIcon
                          style={image_style}
                          icon={diceIcons[icon]}
                        />
                      )}
                    </div>
                    <div className="face2 left2" style={Line}>
                      {/* {rowItem[1]} */}
                      {!!(icon2 > -1) && (
                        <FontAwesomeIcon
                          style={image_style}
                          icon={diceIcons[icon2]}
                        />
                      )}
                    </div>
                    <div className="face2 front2" style={Line}>
                      {/* {rowItem[2]} */}
                      {!!(icon3 > -1) && (
                        <FontAwesomeIcon
                          style={image_style}
                          icon={diceIcons[icon3]}
                        />
                      )}
                    </div>
                  </div>
                </Grid>
                <ParaText1
                  text={`(${String.fromCharCode(
                    "A".charCodeAt(0) + rowIndex
                  )})`}
                  css={{ textAlign: "center" }}
                />
              </Stack>
            );
          })}
          {/* {eArray.slice(0, 4 - OptionAns.length).map((rowItem, rowIndex) => {
            return (
              <Stack>
                <Grid
                  container
                  sx={{ w: "100%", m: "auto" }}
                  columns={3}
                  key={rowIndex}
                >
                  <div
                    className="cube2"
                    ref={questionRefs.current[index].questionRef}
                    key={index}
                  >
                    <div className="face2 top" style={Line}>
                      {diceIcons[OptionRan[rowIndex][0]] && (
                        <FontAwesomeIcon
                          style={image_style}
                          icon={diceIcons[OptionRan[rowIndex][0]]}
                        />
                      )}
                    </div>
                    <div className="face2 left" style={Line}>
                      {diceIcons[OptionRan[rowIndex][1]] && (
                        <FontAwesomeIcon
                          style={image_style}
                          icon={diceIcons[OptionRan[rowIndex][1]]}
                        />
                      )}
                    </div>
                    <div className="face2 front" style={Line}>
                      {diceIcons[OptionRan[rowIndex][2]] && (
                        <FontAwesomeIcon
                          style={image_style}
                          icon={diceIcons[OptionRan[rowIndex][2]]}
                        />
                      )}
                    </div>
                  </div>
                </Grid>
                <ParaText1
                   text={`(${String.fromCharCode(
                    "A".charCodeAt(0) + oCount++
                  )})`}
                  css={{ textAlign: "center" }}
                />
              </Stack>
            );
          })} */}
        </Stack>
      </Grid>
    </Grid>
  );

  switch (OptionAns.length) {
    case 1:
      temp_options = ["1 only", "2 only", "3 only", "4 only"];
      break;
    case 2:
      temp_options = [
        "1 and 2 only",
        "2 and 3 only",
        "3 and 4 only",
        "2 and 4 only",
      ];
      break;
      temp_options = [
        "1 and 2 only",
        "2 and 3 only",
        "3 and 4 only",
        "2 and 4 only",
      ];
    case 3:
      break;
    case 4:
      break;
    default:
      break;
  }
  //   console.log(diceArray, diceArray[randomQ], t);

  //   console.log(option);

  question.question = `Choose the box that is similar to the box formed from the given sheet of paper (X).`;
  question.question_image = question_image;
  question.options = options;
  question.correct_ans = correct_ans;

  return question;
};

export default Cube4;
