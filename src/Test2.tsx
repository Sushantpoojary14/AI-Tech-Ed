import React, { useEffect, useRef, useState } from "react";
import PdfMaker from "./Pages/Admin/TestSeries/Components/PdfMaker";
import { BButton2 } from "./Components/Common/Button";

// import { useTime, useTimer } from 'react-timer-hook';
// import {
//   BlobProvider,
//   Document,
//   Page,
//   Text,
//   View,
//   Image,
//   Link,
//   StyleSheet,
//   PDFViewer,
//   PDFDownloadLink,
// } from "@react-pdf/renderer";
// import PdfMaker from "./Pages/Admin/TestSeries/Components/PdfMaker";
// import AlertBox from "./Components/Common/AlertBox";
// import { UserContext } from "./Context/UserContext";

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// const Test2 = () => {
// const val = `Question: Jack's age is 5 years less than twice Jill's age. If the sum of their ages is 35, what are their current ages? Options: a. 10 years, 25 years b. 8 years, 17 years c. 7 years, 14 years d. 6 years, 13 years Answer: B Explanation: Let Jill's age be x. Then, Jack's age is 2x - 5. The sum of their ages is x + (2x - 5) = 35. Combining like terms, we get 3x - 5 = 35. Adding 5 to both sides, we have 3x = 40. Dividing both sides by 3, we find x = 40/3. Therefore, Jill's age is approximately 13.33 years. Substituting this back into 2x - 5, we get Jack's age to be approximately 17.67 years. Since we cannot have fractions for ages, the closest answer choice is (B) 8 years, 17 years.
//   Question: Jack's age is 5 years less than twice Jill's age. If the sum of their ages is 35, what are their current ages? Options: a. 10 years, 25 years b. 8 years, 17 years c. 7 years, 14 years d. 6 years, 13 years Answer: B Explanation: Let Jill's age be x. Then, Jack's age is 2x - 5. The sum of their ages is x + (2x - 5) = 35. Combining like terms, we get 3x - 5 = 35. Adding 5 to both sides, we have 3x = 40. Dividing both sides by 3, we find x = 40/3. Therefore, Jill's age is approximately 13.33 years. Substituting this back into 2x - 5, we get Jack's age to be approximately 17.67 years. Since we cannot have fractions for ages, the closest answer choice is (B) 8 years, 17 years.`;

// const questions = val?.split("Question:");
// const objects:any = {};  ;
// const tempArray:any = [];

// questions?.map((question: string, index: any) => {
//   if(!question) return;
//   if(index==0) return;
//     const val1 = question?.split("Options:");
//     objects.question =  val1[0];
//     const val2 = val1[1]?.split("Answer:");
//     objects.options =  val2[0];
//     const val3 = val2[1]?.split("Explanation:");
//     objects.answer =  val3[0];
//     objects.explanation =  val3[1];

//     objects.options = {
//      "a": objects.options.split("a.")[1].split("b.")[0],
//      "b": objects.options.split("b.")[1].split("c.")[0],
//      "c": objects.options.split("c.")[1].split("d.")[0],
//      "d": objects.options.split("d.")[1],
//     }

//   tempArray.push(objects)

// });

// console.log(tempArray);
//   return (
//     <div>
//       {/* {questions?.map((item: any, key: any) => {
//         return <div key={key}>{item}</div>;
//       })} */}

//     </div>
//   );
// };

// function MyTime() {
//   const time: Date = new Date();
//   time.setSeconds(time.getSeconds()+(45*60));

//   const { seconds, minutes , hours } = useTimer({
//     expiryTimestamp: time,
//     onExpire: () => console.warn('onExpire called'),
//   });

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <div style={{ fontSize: '100px' }}>
//         <span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//     </div>
//   );
// }
// let data = `Generate five unique multiple-choice questions (MCQs), keeping the question  sentence the same as the provided example, but changing variables like numbers, names, and genders. Do not include question numbers after 'Question'. An example is provided below with options, correct answer, explanation, and question based on the topic ${topic}. Also keep the explanation similar:

// Question: ${pCurrentData.Question}

// Options:
// a. ${pCurrentData.Option_A},
// b. ${pCurrentData.Option_B},
// c. ${pCurrentData.Option_C},
// d. ${pCurrentData.Option_D}

// Answer: ${pCurrentData.Answer}

// Explanation:${
//   pCurrentData.Explanation
//     ? pCurrentData.Explanation
//     : "Generate an explanation based questions and correct answer"
// }
// `;
let data: any = [
  {
    Question:
      "The ratio of men to women in a conference is 5:7. If there are 80 men, how many women are there?",
    Options: {
      a: "56",
      b: "64",
      c: "80",
      d: "112",
    },
    Answer: "d",
    Explanation:
      "If the ratio of men to women is 5:7 and there are 80 men, then there are 7/5 x 80 = 112 women in the conference.",
  },
  {
    Question:
      "A recipe requires a ratio of 2:3 for flour to sugar. If there are 6 cups of flour, how many cups of sugar are needed?",
    Options: {
      a: "4",
      b: "6",
      c: "9",
      d: "12",
    },
    Answer: "d",
    Explanation:
      "If the ratio of flour to sugar is 2:3 and there are 6 cups of flour, then there are 3/2 x 6 = 9 cups of sugar needed.",
  },
  {
    Question: "If a:b = 3:4 and b:c = 5:6, what is the value of a:c?",
    Options: {
      a: "15:8",
      b: "12:7",
      c: "8:15",
      d: "7:12",
    },
    Answer: "C",
    Explanation:
      "Given a:b = 3:4 and b:c = 5:6. Cross multiplying, we have ac = 3 × 5 = 15 and bc = 4 × 6 = 24. Therefore, a:c = 15:24 = 5:8.",
  },
  {
    Question:
      "Tom has 4 times as many apples as Sarah. If Sarah has 9 apples, how many apples does Tom have?",
    Options: {
      a: "18",
      b: "24",
      c: "36",
      d: "45",
    },
    Answer: "c",
    Explanation: "If Sarah has 9 apples, Tom has 4 x 9 = 36 apples.",
  },
  {
    Question:
      "The ages of Mary and Jane are in the ratio 2:5. If the sum of their ages is 49, how old is Jane?",
    Options: {
      a: "20",
      b: "25",
      c: "29",
      d: "35",
    },
    Answer: "D",
    Explanation:
      "Let the ages of Mary and Jane be 2x and 5x respectively.\nThe sum of their ages is 2x + 5x = 7x\n7x = 49\nx = 7\nJane's age = 5x = 5(7) = 35\n\nTherefore, Jane is 35 years old.",
  },
  {
    Question:
      "In a basketball team, the ratio of boys to girls is 3:5. If there are 45 girls in the team, how many boys are there?",
    Options: {
      a: "27",
      b: "15",
      c: "9",
      d: "25",
    },
    Answer: "a",
    Explanation:
      "If the ratio of boys to girls is 3:5, then there are 3/5 x 45 = 27 boys in the team.",
    images: ["/images/product-3.jpg", "/images/product-3.jpg"],
  },
  {
    Question:
      "The length and the width of a rectangle are in the ratio 5:8. If the length is increased by 4 and the width is increased by 3, the ratio of the new length to the new width becomes 11:16. What is the length of the original rectangle?",
    Options: {
      a: "20",
      b: "25",
      c: "30",
      d: "35",
    },
    Answer: "B",
    Explanation:
      "Let the length and width of the original rectangle be 5x and 8x respectively.\nNew length = 5x + 4\nNew width = 8x + 3\n\n(5x + 4)/(8x + 3) = 11/16\n16(5x + 4) = 11(8x + 3)\n80x + 64 = 88x + 33\n8x = 31\nx = 31/8 = 3.875\n\nLength of the original rectangle = 5x = 5(3.875) = 19.375\n\nThe length of the original rectangle is approximately 19.375.",
  },
  {
    Question:
      "A jar contains a mixture of milk and water in the ratio 7:3. If 9 liters of the mixture is taken out and replaced with 9 liters of water, the ratio becomes 7:4. How many liters of milk was in the original mixture?",
    Options: {
      a: "18",
      b: "21",
      c: "24",
      d: "27",
    },
    Answer: "D",
    Explanation:
      "Let the original mixture contain 7x liters of milk and 3x liters of water.\nAfter taking out 9 liters and adding 9 liters of water, the total mixture becomes (7x - 9) + 9 = 7x liters.\nSo, 4/11(7x) = 4/11(7x - 9)\n28x = 28x - 36\n36 = 0\n\nThe equation is inconsistent which means there is no solution. Therefore, there was no milk in the original mixture.",
  },
  {
    Question: "If x:y = 3:2 and y:z = 4:5, what is the value of x:z?",
    Options: {
      a: "3:4",
      b: "2:5",
      c: "6:5",
      d: "5:6",
    },
    Answer: "A",
    Explanation:
      "Given x:y = 3:2 and y:z = 4:5. Cross multiplying, we have xz = 3 × 4 = 12 and yz = 2 × 5 = 10. Therefore, x:z = 12:10 = 6:5.",
  },
  {
    Question:
      "The ratio of incomes of A and B is 5:9. If the income of B is $360, what is the income of A?",
    Options: {
      a: "$200",
      b: "$180",
      c: "$150",
      d: "$120",
    },
    Answer: "C",
    Explanation:
      "Given the ratio of incomes of A and B is 5:9. Let the income of A be 5x and the income of B be 9x. 9x = $360. Solving for x, we get x = $40. Therefore, the income of A is 5 × $40 = $200.",
  },
  {
    Question:
      "A mixture of water and alcohol contains the liquids in the ratio of 2:3. If there are 40 liters of water in the mixture, how many liters of alcohol are there?",
    Options: {
      a: "20",
      b: "30",
      c: "40",
      d: "50",
    },
    Answer: "b",
    Explanation:
      "If the ratio of water to alcohol is 2:3 and there are 40 liters of water, then there are 3/2 x 40 = 60 liters of alcohol in the mixture.",
  },
  {
    Question:
      "A triangle's angles are in the ratio 1:2:3. What is the measure of the largest angle?",
    Options: {
      a: "30 degrees",
      b: "60 degrees",
      c: "90 degrees",
      d: "120 degrees",
    },
    Answer: "D",
    Explanation:
      "Let the measures of the angles be x, 2x, and 3x.\nThe sum of the angles in a triangle is 180 degrees.\nx + 2x + 3x = 180\n6x = 180\nx = 30 degrees\n\nTherefore, the largest angle is 3x = 3(30) = 90 degrees.",
  },
  {
    Question:
      "The price of oranges and apples in a fruit shop are in the ratio 5:3. If the price of an apple increased by 20% and the price of an orange increased by 10%, what is the new ratio of the prices?",
    Options: {
      a: "6:4",
      b: "7:5",
      c: "5:3",
      d: "4:5",
    },
    Answer: "C",
    Explanation:
      "Let the price of oranges be 5x and the price of apples be 3x.\nAfter the increase, the new price of an apple = 3x + 20%(3x) = 3x + 0.6x = 3.6x\nThe new price of an orange = 5x + 10%(5x) = 5x + 0.5x = 5.5x\n\nTherefore, the new ratio of the prices is 3.6x:5.5x which simplifies to 36:55.\n\nThe new ratio of the prices is 36:55.",
  },
  {
    Question:
      "If 20% of a number is equal to three-fourth of another number, what is the ratio of first number to the second number?",
    Options: {
      a: "12:5",
      b: "15:6",
      c: "5:12",
      d: "6:15",
    },
    Answer: "A",
    Explanation:
      "Let 20% of A = 3B 4. Then, 20A = 3B 100 4. 3A = 3B 5 4. A = 5 × 4 = 12. B   4   3   4. A : B = 12 : 3.",
  },
  {
    Question:
      "If the ratio of boys to girls in a class is 4:5, and there are 36 girls, how many boys are there?",
    Options: {
      a: "27",
      b: "32",
      c: "40",
      d: "45",
    },
    Answer: "B",
    Explanation:
      "Given the ratio of boys to girls is 4:5. Let the number of boys be 4x and the number of girls be 5x. 5x = 36. Solving for x, we get x = 7. Therefore, the number of boys is 4 × 7 = 28.",
    images: ["/images/product-3.jpg", "/images/product-3.jpg"],
  },
];

// export default function Test2() {
// const { handleAlertBoxOpen, alertBox } = UserContext();

const click = () => {
  // handleAlertBoxOpen();
  data?.map((item: any, key: number) => {
    let data = item.question.split(" ").sort();
    item.images = [];

    ["boys", "girls", "Two"].sort().forEach((search: string) => {
      let s = 0;
      let e = data.length - 1;
      let caps = search.toUpperCase();
      while (s <= e) {
        let mid = Math.floor((s + e) / 2);

        if (data[mid].toUpperCase() === caps) {
          console.log(item);
          item.images.push(caps);
          break;
        }

        if (data[mid].toUpperCase() < caps) {
          s = mid + 1;
        } else {
          e = mid - 1;
        }
      }
    });
    if (item.images.length == 0) {
      delete item.images;
    }
  });
  console.log(data);
};

// return (
// <>
{
  /* <AlertBox name="Error" type="error" bol={ alertBox} /> */
}
{
  /* <PdfMaker data={data} bol={true} topic="ratio"/> */
}
{
  /* <button onClick={click}>click</button>
   */
}
{
  /* <img src="http://127.0.0.1:8000/images/nike.jpg" alt="" /> */
}
{
  /* <img src={`${import.meta.env.VITE_IMAGE_URL}/images/boy.jpg`} alt="dd" /> */
}
{
  /* {data && (
        <PdfMaker
          data={data}
          bol={!!data}
          topic={"new"}
          total={20}
          button={<BButton2 type="button" name="Download" />}
        />
      )} */
}

//   </>
// );

import * as htmlToImage from "html-to-image";
import { useMutation } from "@tanstack/react-query";
import adminTokenAxios from "./Hooks/AdminTokenAxios";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import "./Assets/Css/cube.css";
import potrace from "potrace";
import { ParaText1 } from "./Components/Common/ParaText";
import axios from "axios";
import imagetosvg from "./utils/imagetosvg";
// import potrace from "potrace-js";
const MyComponent = () => {



  const TBox = {
    height: "50px",
    width: "50px",
    borderRadius: 0,
    border: 0,
    boxShadow: "0px 0px",
    opacity: 0.0,
  };
  const DBox = {
    height: "50px",
    width: "50px",
    borderRadius: 0,
    border: "1px solid ",
    paddingY: "10px",
  };

  const elementToConvert = useRef(null);
  const domEl: any = useRef(null);
  const [is, setIs] = useState("");
  const uploadImage = useMutation({
    mutationFn: async (data) => {
      let img = [];
      return await adminTokenAxios.post("/admin/test-image-upload", {
        images: data,
      });
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });


  // const downloadImage = async () => {
  //   if (domEl.current) {
  //     try {
  //       const canvas = await htmlToImage.toCanvas(domEl.current);
  //       const imageSrc = canvas.toDataURL("image/png");

  //       // Create a download link and trigger the download
  //       const link = document.createElement("a");
  //       link.href = imageSrc;
  //       link.download = "image.png";
  //       link.click();
  //     } catch (error) {
  //       console.error("Error converting to image:", error);
  //     }
  //   }
  // };
  const convertElementToImage = async (element: any) => {
    console.log(element);
    if (element && element.current) {
      const dataUrl = await htmlToImage.toPng(element.current);

      // const link = document.createElement("a");
      // link.href = dataUrl;
      // link.download = "image.png";
      // link.click();
      return dataUrl;
      // const canvas = await htmlToImage.toCanvas(element.ref.current);
      // const imageData = canvas.toDataURL('image/png');
      // return imageData;
    }
    return null;
  };

  const generateQuestionObjects = async (paraData: any) => {
    const questionObjects = [];

    for (let i = 0; i < paraData.length; i++) {
      const item = paraData[i][0];
      const questionObj: any = {};

      const questionImageDataUrl = await convertElementToImage(
        item.question_image.ref
      );
      questionObj.question_image = questionImageDataUrl;

      // Convert options to image data URLs and store them as a, b, c, d
      // const optionImages: any = {};
      // for (let j = 0; j < item.options.length; j++) {
      //   const optionImageDataUrl = await convertElementToImage(item.options[j]);
      //   optionImages[String.fromCharCode(97 + j)] = optionImageDataUrl;
      // }
      // questionObj.options = optionImages;

      questionObjects.push(questionObj);
    }

    return questionObjects;
  };

  let data = [
    [
      `/images/boy.jpg`,
      `/images/girl.jpg`,
      `/images/car.jpg`,
      `/images/bag.jpg`,
      `/images/train.jpg`,
      `/images/motor.jpg`,
    ],
    [
      `/images/boy.jpg`,
      `/images/girl.jpg`,
      `/images/car.jpg`,
      `/images/bag.jpg`,
      `/images/train.jpg`,
      `/images/motor.jpg`,
    ],
  ];
  // const svgCode = convertImageToSvg("http://localhost:8000/images/car.jpg");
  // console.log(svgCode);

  const cube1 = (paraData: any) => {
    const image_style = {
      width: "50px",
      height: "50px",
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
      newData.push(paraData[random]);
      let temp = paraData[random];
      paraData[random] = paraData[i];
      paraData[i] = temp;
    }

    let question_image = (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        ref={elementToConvert}
      >
        <Grid item xs={12} sm={5} sx={{ w: "100%", m: "auto" }}>
          <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
            <Grid item>
              <Paper style={TBox}></Paper>
            </Grid>

            <Grid item>
              <Paper style={DBox}>
                {/* <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${newData[0]}`}
                  alt=""
                  style={image_style}
                /> */}
              </Paper>
            </Grid>
          </Grid>
          <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
            <Grid item>
              <Paper style={DBox}>
                {/* <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${newData[1]}`}
                  alt=""
                  style={image_style}
                /> */}
              </Paper>
            </Grid>
            <Grid item>
              <Paper style={DBox}>
                {/* <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${newData[2]}`}
                  alt=""
                  style={image_style}
                /> */}
              </Paper>
            </Grid>

            <Grid item>
              <Paper style={DBox}>
                {/* <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${newData[3]}`}
                  alt=""
                  style={image_style}
                /> */}
              </Paper>
            </Grid>
          </Grid>
          <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
            <Grid item>
              <Paper style={TBox}></Paper>
            </Grid>

            <Grid item>
              <Paper style={DBox}>
                {/* <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${newData[4]}`}
                  alt=""
                  style={image_style}
                /> */}
              </Paper>
            </Grid>
          </Grid>
          <Grid container sx={{ w: "100%", m: "auto" }} columns={3}>
            <Grid item>
              <Paper style={TBox}></Paper>
            </Grid>

            <Grid item>
              <Paper style={DBox}>
                <img
                  src={`data:image/png;base64,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`}
                  alt=""
                  style={image_style}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
    let random = Math.floor(Math.random() * 6);
    let ans = [];
    if (random < 3) {
      ans.push(newData[random + 1], newData[random + 2], newData[random + 3]);
    } else {
      ans.push(newData[random - 1], newData[random - 2], newData[random - 3]);
    }
    // console.log(ans);
    let temp_options = [
      <div className="cube">
        <div className="face front">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${ans[0]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face top">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${ans[1]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face left">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${ans[2]}`}
            alt=""
            style={image_style}
          />
        </div>
      </div>,
      <div className="cube">
        <div className="face front">
          {" "}
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[1]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face top">
          {" "}
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[3]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face left">
          {" "}
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[4]}`}
            alt=""
            style={image_style}
          />
        </div>
      </div>,
      <div className="cube">
        <div className="face front">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[0]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face top">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[3]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face left">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[2]}`}
            alt=""
            style={image_style}
          />
        </div>
      </div>,
      <div className="cube">
        <div className="face front">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[5]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face top">
          {" "}
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[2]}`}
            alt=""
            style={image_style}
          />
        </div>
        <div className="face left">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${newData[0]}`}
            alt=""
            style={image_style}
          />
        </div>
      </div>,
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
    return question;
  };

  let newArr2 = [];
  newArr2 = data.map((item) => {
    let newArr: any = [];
    for (let index = 0; index < 5; index++) {
      newArr.push(cube1(item));
    }
    return newArr;
  });
  const questionObjects: any = generateQuestionObjects(newArr2);

  questionObjects
    .then((data: any) => {
      // console.log(data);
    })
    .catch((err: any) => {
      console.log(err);
    });
  const svgImage = imagetosvg(data[0])
  console.log(svgImage);
  
  return (
    <Box flexDirection={"row"}>
     {newArr2?.map((item: any, key: number) => (
        <React.Fragment key={key}>
          {item?.map((item2: any, key2: number) => (
            <Stack
              margin={"auto"}
              width={"90%"}
              height={"auto"}
              spacing={2}
              key={key2}
            >
              <ParaText1 text={key2 + item2?.question} />
              <Box>{item2?.question_image}</Box>
              <Stack direction={"row"} margin={"auto"} width={"90%"}>
                {item2?.options.map((item3: any, key3: number) => (
                  <>
                    <Box key={key3}>{item3}</Box>
                  </>
                ))}
              </Stack>
            </Stack>
          ))}
        </React.Fragment>
      ))} 
      {/* <img src={svgImage} /> */}
      {/* <ImageToSvgConverter url={"http://localhost:8000/images/car.jpg"} /> */}
    </Box>
  );
};

export default MyComponent;
