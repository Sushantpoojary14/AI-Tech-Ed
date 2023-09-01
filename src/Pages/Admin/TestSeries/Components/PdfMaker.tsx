import {
  Document,
  Page,
  Text,
  View,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import { BButton2 } from "../../../../Components/Common/Button";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import { useRef } from "react";
import axios from "axios";
const styles = {
  page: {
    padding: 20,
  },
  section: {
    margin: 10,
  },
  mainContainer: {
    margin: 3,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // border: "1pt solid #000",
  },
  Container: {
    padding: 2,
    paddingLeft: 20,
    paddingRight: 20,
    // border: "1pt solid #000",
  },
  question: {
    fontSize: 12,
    margin: 0,
  },
  options: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
  },

  answer: {
    fontSize: 12,
    color: "green",
  },

  answer2: {
    fontSize: 12,
    margin: 7,
    // marginBottom:7
  },
  header2: {
    fontSize: 12,
    margin: 5,
  },
  explanation: {
    fontSize: 12,
    color: "red",
    whiteSpace: "pre-line",
    lineHeight: 1.5,
  },
  header: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center" as const,
  },
  image: {
    width: "20%",
    height: "auto",
  },
};

type questions = {
  Question?: string;
  question?: string;
  Options?: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  option_1?: string;
  option_2?: string;
  option_3?: string;
  option_4?: string;
  Answer?: string;
  Explanation?: string;
  explanation?: string;
  correct_option?: string | number;
  tst_id?: number;
  marks?: null | number;
  status?: number;
  images?: string;
};

// type questionList = {
//   id: number;
//   question: string;
//   option_1: string;
//   option_2: string;
//   option_3: string;
//   option_4: string;
//   option_5: null;
//   correct_option: string | number;
//   explanation: string;
//   tst_id: number;
//   marks: null | number;
//   status: number;
// };

interface props {
  data: questions[];
  // data2?:questionList[];
  randomG?: boolean;
  bol: boolean;
  topic: string;
  total: number;
  button?: ReactJSXElement;
  buttonRef?: any;
}
const PdfMaker = (props: props) => {
  // const arr: number[] = [];
  let selected_question: questions[] = [];
  // console.log(props.data,props.total);

  // const random: questions[] = [];
  const questions: questions[] = props.data;

  if (!props.randomG) {
    if (!!questions) {
      if (questions?.length > 15) {
        let count: number = props.total;
        for (let i = count - 1; i >= 0; i--) {
          const ran = Math.floor(Math.random() * (i + 1));
          const temp = questions[i];
          questions[i] = questions[ran];
          questions[ran] = temp;
          selected_question.push(questions[i]);
        }
      } else {
        selected_question = questions;
      }

      // console.log(selected_question);
    }
  } else {
    selected_question = questions;
  }

  return props.button ? (
    <PDFDownloadLink
      document={
        <MyDocument selected_question={selected_question} topic={props.topic} />
      }
      fileName={`${props.topic}.pdf`}
    >
      {props.button}
    </PDFDownloadLink>
  ) : (
    <PDFDownloadLink
      document={
        <MyDocument selected_question={selected_question} topic={props.topic} />
      }
      fileName={`${props.topic}.pdf`}
      style={{ display: "none" }}
    >
      {props.buttonRef && <button ref={props.buttonRef}></button>}
    </PDFDownloadLink>
  );
};

const MyDocument = ({
  selected_question,
  topic,
}: {
  selected_question: questions[];
  topic: string;
}) => {
  async function getImageData(url:string) {
    try {
      const response = await axios.get(url, { responseType: "arraybuffer" });
      return response.data;
    } catch (error) {
      console.error("Error fetching image data:", error);
      return null;
    }
  }
  getImageData('http://127.0.0.1:8000/images/nike.jpg')
  return (
    // selected_question?.length != 0 && 
    <>
    {/* <img src="http://127.0.0.1:8000/images/product-7.jpg" alt="" /> */}
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>{topic?.toUpperCase()}</Text>
        <View style={styles.mainContainer}>
          {selected_question?.length != 0 &&
            selected_question?.map((item: questions, key) => (
              <View style={styles.Container} key={key}>
                {item.Options ? (
                  <>
                    <Text style={styles.question}>
                      {`${key + 1}: ${item.Question}`}
                      {/* {item.images && import.meta.env.VITE_IMAGE_URL+item.images[0]} */}
                      {/* {item.images && import.meta.env.VITE_IMAGE_URL+item.images[0]} */}
                    </Text>

                    {item.images && (
                      <Image style={styles.image} src={'http://127.0.0.1:8000/images/nike.jpg'} />
                    )}
                    <Text style={styles.options}>{`A. ${item.Options.a}`}</Text>
                    <Text style={styles.options}>{`B. ${item.Options.b}`}</Text>
                    <Text style={styles.options}>{`C. ${item.Options.c}`}</Text>
                    <Text style={styles.options}>{`D. ${item.Options.d}`}</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.options}>
                      {`${key + 1}: ${item.question} `}
                    </Text>
                    <Text style={styles.options}>{`A. ${item.option_1}`}</Text>
                    <Text style={styles.options}>{`B. ${item.option_2}`}</Text>
                    <Text style={styles.options}>{`C. ${item.option_3}`}</Text>
                    <Text style={styles.options}>{`D. ${item.option_4}`}</Text>
                  </>
                )}
              </View>
            ))}
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainContainer}>
          <Text style={styles.header2}>Answers:</Text>
          <View style={styles.Container}>
            {selected_question?.length != 0 &&
              selected_question?.map((item: questions, key) => (
                <Text style={styles.answer} key={key}>
                  {item.Answer
                    ? `${key + 1}.  ${item.Answer?.toUpperCase()}`
                    : `${key + 1}.  ${item.correct_option}`}
                </Text>
              ))}
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.header2}>Explanation:</Text>
          {selected_question?.length != 0 &&
            selected_question?.map((item: questions, key) => (
              <View style={styles.Container} key={key}>
                {item.Answer ? (
                  <>
                    <Text style={styles.answer2}>
                      {`${key + 1}. ${item.Answer?.toUpperCase()} `}
                    </Text>
                    <Text
                      style={styles.explanation}
                    >{`${item.Explanation} `}</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.answer2}>
                      {`${key + 1}. ${item.correct_option}`}
                    </Text>
                    <Text
                      style={styles.explanation}
                    >{`${item.explanation} `}</Text>
                  </>
                )}
              </View>
            ))}
        </View>
      </Page>
    </Document></>
    
  );
};

export default PdfMaker;
