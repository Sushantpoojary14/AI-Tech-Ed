import { Stack } from "@mui/material";
import React from "react";
import randomicon from "../../../../utils/randomIcon";

const Mirror2 = () => {
  const capitalAlphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let newData: any = [];
  const options: any = [];

  let question: any = {};
  for (let i = 5; i >= 0; i--) {
    const random = Math.floor(Math.random() * 1954);
    newData.push(capitalAlphabets[random]);
  }
  console.log(newData);
  
  let question_image = (
    <Stack>

    </Stack>
  )

  return <div></div>;
};

export default Mirror2;
