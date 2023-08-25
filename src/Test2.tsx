import React from "react";

// import { useTime, useTimer } from 'react-timer-hook';
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import PdfMaker from "./Pages/Admin/TestSeries/Components/PdfMaker";
import AlertBox from "./Components/Common/AlertBox";
import { UserContext } from "./Context/UserContext";

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
let data = [
  {
    question:
      " Two numbers have a 4:7 ratio. The new numbers have a ratio of 9:17 if 6 is taken away from each. The minimizing number is:\n\n",
    options: {
      a: "18",
      b: "24",
      c: "32",
      d: "42",
    },
    answer: "C",
    explanation:
      " Let the numbers be 4x and 7x. Then, 4x - 6 = 9, 7x - 6 = 17. \n17(4x - 6) = 9(7x - 6).\n12x = 144.\nx = 12.\nThe smaller number = (4 x 12) = 48. \n\n",
  },
  {
    question:
      " Two numbers have a 2:9 ratio. The new numbers have a ratio of 5:29 if 3 is taken away from each. The minimizing number is:\n\n",
    options: {
      a: "47",
      b: "54",
      c: "58",
      d: "63",
    },
    answer: "A",
    explanation:
      " Let the numbers be 2x and 9x. Then, 2x - 3 = 5, 9x - 3 = 29.\n29(2x - 3) = 5(9x - 3).\n58x = 87.\nx = 1.5.\nThe smaller number = (2 x 1.5) = 3. \n\n",
  },
  {
    question:
      " Two numbers have a 1:4 ratio. The new numbers have a ratio of 7:28 if 2 is taken away from each. The minimizing number is:\n\n",
    options: {
      a: "8",
      b: "12",
      c: "16",
      d: "20",
    },
    answer: "A",
    explanation:
      " Let the numbers be x and 4x. Then, x - 2 = 7, 4x - 2 = 28.\n28(x - 2) = 7(4x - 2).\n28x - 56 = 28x - 14.\n-56 = -14.\nThis equation has no solution.\nTherefore, no minimizing number can be determined.\n\n",
  },
  {
    question:
      " Two numbers have a 5:11 ratio. The new numbers have a ratio of 10:22 if 4 is taken away from each. The minimizing number is:\n\n",
    options: {
      a: "15",
      b: "22",
      c: "30",
      d: "38",
    },
    answer: "C",
    explanation:
      " Let the numbers be 5x and 11x. Then, 5x - 4 = 10, 11x - 4 = 22.\n22(5x - 4) = 10(11x - 4).\n110x - 88 = 110x - 40.\n-88 = -40.\nThis equation has no solution.\nTherefore, no minimizing number can be determined.\n\n",
  },
  {
    question:
      " Two numbers have a 7:12 ratio. The new numbers have a ratio of 15:26 if 5 is taken away from each. The minimizing number is:\n\n",
    options: {
      a: "39",
      b: "48",
      c: "54",
      d: "61",
    },
    answer: "D",
    explanation:
      " Let the numbers be 7x and 12x. Then, 7x - 5 = 15, 12x - 5 = 26.\n26(7x - 5) = 15(12x - 5).\n182x - 130 = 180x - 75.\n2x = 55.\nx = 27.5.\nThe smaller number = (7 x 27.5) = 192.5.",
  },
  {
    question:
      " If 60% of a number is equal to three-fourth of another number, what is the ratio of first number to the second number?\n\n",
    options: {
      a: "03:04",
      b: "04:05",
      c: "05:04",
      d: "06:04",
    },
    answer: "C",
    explanation:
      " Let 60% of A = 3B/4.\nThen, 60A = 3B/4.\n4A = 3B/4.\nA = (3/4) * (4/3) = 1.\nB = 1.\nA : B = 1 : 1.\n\n",
  },
  {
    question:
      " If 25% of a number is equal to one-fifth of another number, what is the ratio of first number to the second number?\n\n",
    options: {
      a: "01:04",
      b: "02:05",
      c: "03:05",
      d: "04:05",
    },
    answer: "A",
    explanation:
      " Let 25% of A = B/5.\nThen, 25A = B/5.\n5A = B/5.\nA = (1/5) * (5/1) = 1.\nB = 5.\nA : B = 1 : 5.\n\n",
  },
  {
    question:
      " If 30% of a number is equal to three-eighth of another number, what is the ratio of first number to the second number?\n\n",
    options: {
      a: "03:08",
      b: "04:09",
      c: "05:08",
      d: "06:09",
    },
    answer: "C",
    explanation:
      " Let 30% of A = 3B/8.\nThen, 30A = 3B/8.\n8A = 3B/8.\nA = (3/8) * (8/3) = 1.\nB = 1.\nA : B = 1 : 1.\n\n",
  },
  {
    question:
      " If 50% of a number is equal to two-fifth of another number, what is the ratio of first number to the second number?\n\n",
    options: {
      a: "02:05",
      b: "03:05",
      c: "04:05",
      d: "05:05",
    },
    answer: "C",
    explanation:
      " Let 50% of A = 2B/5.\nThen, 50A = 2B/5.\n5A = 2B/5.\nA = (2/5) * (5/2) = 1.\nB = 1.\nA : B = 1 : 1.\n\n",
  },
  {
    question:
      " If 35% of a number is equal to seven-tenth of another number, what is the ratio of first number to the second number?\n\n",
    options: {
      a: "02:07",
      b: "03:07",
      c: "04:07",
      d: "05:07",
    },
    answer: "B",
    explanation:
      " Let 35% of A = 7B/10.\nThen, 35A = 7B/10.\n10A = 7B/10.\nA = (7/10) * (10/7) = 1.\nB = 1.\nA : B = 1 : 1.",
  },
  {
    question:
      " There are a certain number of dogs in a park and the park only contains brown, black, and white dogs. The number of brown dogs is three times the number of black dogs. Black dogs outnumber white dogs by a factor of one-fifth. If there are 60 dogs in total, how many brown dogs are there?\n\n",
    options: {
      a: "12",
      b: "15",
      c: "18",
      d: "20",
    },
    answer: "D",
    explanation:
      " Since there are three times as many brown dogs as black dogs, the ratio of brown dogs to black dogs is 3:1. The ratio of black dogs to white dogs is one to five because black dogs outnumber white dogs by a factor of one-fifth. Using these ratios, we can construct the ratio of brown dogs to black dogs to white dogs to be 15:5:1. There are 60 dogs total, thus 21 divided by 21 is 3 dogs. The quantity of brown dogs is 15 parts brown dog divided by 3 for a total of 45 brown dogs. Therefore, the answer is Option D.\n\n",
  },
  {
    question:
      " There are a certain number of students in a class and the class only contains boys and girls. The number of boys is twice the number of girls. Boys outnumber girls by a factor of one-third. If there are 90 students in total, how many boys are there?\n\n",
    options: {
      a: "30",
      b: "40",
      c: "60",
      d: "80",
    },
    answer: "C",
    explanation:
      " Since there are twice as many boys as girls, the ratio of boys to girls is 2:1. Boys outnumber girls by a factor of one-third, so the ratio of boys to girls is 3:1. Using these ratios, we can construct the ratio of boys to girls to be 6:3. There are 90 students total, thus 9 divided by 9 is 10 students. The quantity of boys is 6 parts boys divided by 10 for a total of 60 boys. Therefore, the answer is Option C.\n\n",
  },
  {
    question:
      " There are a certain number of apples in a basket and the basket only contains green, red, and yellow apples. The number of green apples is four times the number of red apples. Red apples outnumber yellow apples by a factor of one-sixth. If there are 80 apples in total, how many green apples are there?\n\n",
    options: {
      a: "20",
      b: "24",
      c: "32",
      d: "40",
    },
    answer: "D",
    explanation:
      " Since there are four times as many green apples as red apples, the ratio of green apples to red apples is 4:1. Red apples outnumber yellow apples by a factor of one-sixth, so the ratio of red apples to yellow apples is 6:1. Using these ratios, we can construct the ratio of green apples to red apples to yellow apples to be 24:6:1. There are 80 apples total, thus 31 divided by 31 is 2 apples. The quantity of green apples is 24 parts green apples divided by 2 for a total of 48 green apples. Therefore, the answer is Option D.\n\n",
  },
  {
    question:
      " There are a certain number of books on a shelf and the shelf only contains fiction, non-fiction, and mystery books. The number of fiction books is three times the number of non-fiction books. Non-fiction books outnumber mystery books by a factor of one-eighth. If there are 120 books on the shelf, how many fiction books are there?\n\n",
    options: {
      a: "30",
      b: "40",
      c: "60",
      d: "80",
    },
    answer: "D",
    explanation:
      " Since there are three times as many fiction books as non-fiction books, the ratio of fiction books to non-fiction books is 3:1. Non-fiction books outnumber mystery books by a factor of one-eighth, so the ratio of non-fiction books to mystery books is 8:1. Using these ratios, we can construct the ratio of fiction books to non-fiction books to mystery books to be 24:8:1. There are 120 books total, thus 33 divided by 33 is 4 books. The quantity of fiction books is 24 parts fiction books divided by 4 for a total of 96 fiction books. Therefore, the answer is Option D.\n\n",
  },
  {
    question:
      " There are a certain number of cars in a parking lot and the parking lot only contains blue, red, and white cars. The number of blue cars is twice the number of red cars. Blue cars outnumber white cars by a factor of one-fifth. If there are 150 cars in total, how many blue cars are there?\n\n",
    options: {
      a: "40",
      b: "60",
      c: "80",
      d: "100",
    },
    answer: "B",
    explanation: " Since there are twice as many blue cars as red cars",
  },
  {
    question:
      " A bag contains yellow and green apples. The ratio of yellow to green apples is 3:4. When 40 yellow apples are removed from the bag, there are 2 times more green apples than yellow apples. What is the difference between the number first contained in the bag of yellow and green apples?\n\n",
    options: {
      a: "20,",
      b: "40,",
      c: "60,",
      d: "80",
    },
    answer: "B",
    explanation:
      " The original ratio between yellow to green apples is 3:4. When 40 yellow apples are removed, the ratio now becomes 1:2, which can be simplified to 1:2. Hence, 40 apples represents 1 part. Therefore, 1 part = 40 apples. Since there is 1 more part of green apples than yellow apples originally, the difference between yellow and green apples is 40. Therefore, the answer is Option B.\n\n",
  },
  {
    question:
      " A class consists of boys and girls. The ratio of boys to girls is 2:3. If there are 40 boys in the class, how many girls are there?\n\n",
    options: {
      a: "30,",
      b: "50,",
      c: "60,",
      d: "70",
    },
    answer: "C",
    explanation:
      " The original ratio between boys to girls is 2:3. If there are 40 boys, we can set up a proportion: 2/3 = 40/x. Cross-multiplying, we get 2x = 120. Solving for x, we find that there are 60 girls in the class. Therefore, the answer is Option C.\n\n",
  },
  {
    question:
      " A box contains red and blue pens. The ratio of red to blue pens is 5:7. If there are 56 red pens in the box, how many blue pens are there?\n\n",
    options: {
      a: "49,",
      b: "64,",
      c: "72,",
      d: "98",
    },
    answer: "D",
    explanation:
      " The original ratio between red to blue pens is 5:7. If there are 56 red pens, we can set up a proportion: 5/7 = 56/x. Cross-multiplying, we get 5x = 392. Solving for x, we find that there are 98 blue pens in the box. Therefore, the answer is Option D.\n\n",
  },
  {
    question:
      " A jar contains black and white marbles. The ratio of black to white marbles is 3:8. When 24 black marbles are removed from the jar, there are 3 times more white marbles than black marbles. What is the difference between the number first contained in the jar of black and white marbles?\n\n",
    options: {
      a: "72,",
      b: "96,",
      c: "120,",
      d: "144",
    },
    answer: "A",
    explanation:
      " The original ratio between black to white marbles is 3:8. When 24 black marbles are removed, the ratio now becomes 1:3, which can be simplified to 1:3. Hence, 24 marbles represents 1 part. Therefore, 1 part = 24 marbles. Since there are 2 more parts of white marbles than black marbles originally, the difference between black and white marbles is 72. Therefore, the answer is Option A.\n\n",
  },
  {
    question:
      " A store sells apples and oranges. The ratio of apples to oranges is 2:5. If there are 36 apples in the store, how many oranges are there?\n\n",
    options: {
      a: "90,",
      b: "100,",
      c: "126,",
      d: "180",
    },
    answer: "D",
    explanation:
      " The original ratio between apples to oranges is 2:5. If there are 36 apples, we can set up a proportion: 2/5 = 36/x. Cross-multiplying, we get 2x = 180. Solving for x, we find that there are 180 oranges in the store. Therefore, the answer is Option D.",
  },
];

export default function Test2() {
  const { handleAlertBoxOpen, alertBox } = UserContext();

const click = () => {
  handleAlertBoxOpen();
};

  return (
    <>
      {/* <AlertBox name="Error" type="error" bol={ alertBox} /> */}
      {/* <PdfMaker data={data} bol={true} topic="ratio"/> */}
      <button onClick={click}>click</button>
    </>
  );
}
