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
          // console.log(item);
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
  // console.log(data);
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
import {
  Box,
  Button,
  Grid,
  Input,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "./Assets/Css/cube.css";
import potrace from "potrace";
import { ParaText1 } from "./Components/Common/ParaText";
import axios from "axios";
import imagetosvg from "./utils/imagetosvg";
import { log } from "console";
import cube1 from "./Pages/Admin/nonVerbal/Cube/Cube1";
import { generateQuestionObjects } from "./Pages/Admin/nonVerbal/HtmlToImage";
import cube2 from "./Pages/Admin/nonVerbal/Cube/Cube2";
import mirror1 from "./Pages/Admin/nonVerbal/Mirror/Mirror1";
import Cube3 from "./Pages/Admin/nonVerbal/Cube/Cube3";
import Paper1 from "./Pages/Admin/nonVerbal/PaperFold/Paper1";
import Cube4 from "./Pages/Admin/nonVerbal/Cube/Cube4";
import Cube5 from "./Pages/Admin/nonVerbal/Cube/Cube5";
// import potrace from "potrace-js";
const MyComponent = () => {
  const [newData, setNewData] = useState<any>([]);

  const questionRefs: any = useRef([]);

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

  for (let index = 0; index < 15; index++) {
    const questionRef = useRef(null);
    const optionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    questionRefs.current.push({ questionRef, optionRefs });
  }

  const generateQuestions = async () => {
    // console.log("newArr2");
    let newArr2: any = [];
    let count = -1;
    setNewData([]);
    // data.map(async (item) => {

    // for (let index = 0; index < 2; index++) {
    //   count++;
    //   let newA = await cube3(count, questionRefs);
    //   newArr2.push(newA);
    // }
    // for (let index = 0; index < 2; index++) {
    //   count++;
    //   let newA = await cube2(count, questionRefs);
    //   newArr2.push(newA);
    // }
    // for (let index = 0; index < 2; index++) {
    //   count++;
    //   let newA = await cube1(count, questionRefs);
    //   newArr2.push(newA);
    // }
    for (let index = 0; index < 1; index++) {
      count++;
      let newA = await Paper1(count, questionRefs);
      newArr2.push(newA);
    }
    // for (let index = 0; index < 2; index++) {
    //   count++;
    //   let newA2 = await mirror1(count, questionRefs);
    //   newArr2.push(newA2);
    // }
    // for (let index = 0; index < 2; index++) {
    //   count++;
    //   let newA2 = await Cube3(count, questionRefs);
    //   newArr2.push(newA2);
    // }
    // for (let index = 0; index < 2; index++) {
    //   count++;
    //   let newA2 = await Cube4(count, questionRefs);
    //   newArr2.push(newA2);
    // }
    // for (let index = 0; index < 2; index++) {
    //   count++;
    //   let newA2 = await Cube5(count, questionRefs);
    //   newArr2.push(newA2);
    // }

    setNewData(newArr2);
    console.log(newArr2);
  };

  const imageG = async () => {
    const res = await generateQuestionObjects(newData);
    console.log("imageG", res);
  };
  // const questionObjects: any = generateQuestionObjects(newData);

  return (
    <>
      <Box flexDirection={"row"}>
        <BButton2 func={generateQuestions} type="button" name="Generate" />
      </Box>
      <Box flexDirection={"row"}>
        <BButton2 func={imageG} type="button" name="Upload" />
      </Box>

      <Box flexDirection={"row"}>
        <React.Fragment>
          {newData?.map((item2: any, key2: number) => (
            <Stack
              margin={"auto"}
              width={"90%"}
              height={"auto"}
              spacing={2}
              key={key2}
              marginY={"15px"}
            >
              <ParaText1 text={"Q) " + item2?.question} />
              <Box>{item2?.question_image}</Box>
              <Stack
                direction={"row"}
                margin={"auto"}
                width={"90%"}
                marginY={"15px"}
                sx={{
                  gridColumn: "auto auto auto auto",
                  columnGap: "30px",
                }}
              >
                {item2?.options?.map((item3: any, key3: number) => (
                  <>
                    <Box key={key3}>
                      {String.fromCharCode("A".charCodeAt(0) + key3) + ")"}{" "}
                      {item3}
                    </Box>
                  </>
                ))}
              </Stack>
               <ParaText1
                  text={`Answer: ${String.fromCharCode(
                    "A".charCodeAt(0) + (item2.correct_ans-1)
                  )}`}
                />
            </Stack>
          ))}
        </React.Fragment>

        {/* <img src={svgImage} /> */}
        {/* <ImageToSvgConverter url={"http://localhost:8000/images/car.jpg"} /> */}
      </Box>
    </>
  );
};

export default MyComponent;
