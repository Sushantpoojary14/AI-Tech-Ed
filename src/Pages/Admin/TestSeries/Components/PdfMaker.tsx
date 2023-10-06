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
  conversation: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  optionContainer: {
    padding: 2,
    marginTop: 6,
    marginBottom: 15,

    // border: "1pt solid #000",
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
    width: "100px",
    height: "100px",
  },
  optionImage: {
    width: "60px",
    height: "60px",
    marginBottom: 5,
    marginLeft: 5,
  },
  mainText: {
    fontSize: 13,
    fontWeight: 900,
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
  Conversation?: string;
  Paragraph?: string;
  conversation?: string;
  paragraph?: string;
  explanation?: string;
  correct_option?: string | number;
  tst_id?: number;
  marks?: null | number;
  status?: number;
  images?: string;
  question_image?: any;
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

  randomG?: boolean;
  bol: boolean;
  topic: string;
  total: number;
  button?: ReactJSXElement;
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

  return (
    <PDFDownloadLink
      document={
        <MyDocument selected_question={selected_question} topic={props.topic} />
      }
      fileName={`${props.topic}.pdf`}
    >
      {props.button}
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
  console.log(selected_question);

  return (
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
                      {item.Paragraph && (
                        <Text style={styles.paragraph}>
                          <Text style={styles.mainText}>{`${key + 1}: `}</Text>
                          {` ${item.Paragraph}`}
                        </Text>
                      )}
                      {item.paragraph && item?.question_image && (
                        <View>
                          {item?.question_image?.map((item2: any) => {
                            console.log(
                              `${import.meta.env.VITE_IMAGE_QAPI_URL}${
                                item2?.image_url.split("/")[3]
                              }`
                            );
                            // console.log(`${import.meta.env.VITE_IMAGE_OAPI_URL}${item.option_1?.split("/")[3]}`);
                            return (
                              <Image
                                style={styles.image}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_QAPI_URL}${
                                    item2?.image_url.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            );
                          })}
                        </View>
                      )}
                      {item.Conversation && (
                        <Text style={styles.conversation}>
                          {`${item.Conversation}`}
                        </Text>
                      )}
                      {item.Conversation || item.Paragraph ? (
                        <Text
                          style={styles.question}
                        >{`${item.Question}`}</Text>
                      ) : (
                        <Text style={styles.question}>
                          <Text style={styles.mainText}>{`${key + 1}: `}</Text>
                          {item.Question}
                        </Text>
                      )}
                        {!item.paragraph && item?.question_image && (
                        <View>
                          {item?.question_image?.map((item2: any) => {
                            // console.log(`${import.meta.env.VITE_IMAGE_OAPI_URL}${item.option_1?.split("/")[3]}`);
                            return (
                              <Image
                                style={styles.image}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_QAPI_URL}${
                                    item2?.image_url.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            );
                          })}
                        </View>
                      )}
                      {item?.question_image && (
                        <View>
                          {item?.question_image.map((item2: string) => {
                            return (
                              <Image
                                style={styles.image}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_QAPI_URL}${
                                    item2.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            );
                          })}
                        </View>
                      )}
                      <View style={styles.optionContainer}>
                        <Text
                          style={styles.options}
                        >{`A. ${item.Options.a}`}</Text>
                        <Text
                          style={styles.options}
                        >{`B. ${item.Options.b}`}</Text>
                        <Text
                          style={styles.options}
                        >{`C. ${item.Options.c}`}</Text>
                        <Text
                          style={styles.options}
                        >{`D. ${item.Options.d}`}</Text>
                      </View>
                    </>
                  ) : (
                    <>
                      {item.paragraph && (
                        <Text style={styles.paragraph}>
                          {`${key + 1}: ${item.paragraph}`}
                        </Text>
                      )}
                      {item.paragraph && item?.question_image && (
                        <View>
                          {item?.question_image?.map((item2: any) => {
                            console.log(
                              `${import.meta.env.VITE_IMAGE_QAPI_URL}${
                                item2?.image_url.split("/")[3]
                              }`
                            );
                            // console.log(`${import.meta.env.VITE_IMAGE_OAPI_URL}${item.option_1?.split("/")[3]}`);
                            return (
                              <Image
                                style={styles.image}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_QAPI_URL}${
                                    item2?.image_url.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            );
                          })}
                        </View>
                      )}
                      {item.conversation && (
                        <Text style={styles.conversation}>
                          {`${item.conversation}`}
                        </Text>
                      )}
                      {item.conversation || item.paragraph ? (
                        <Text
                          style={styles.question}
                        >{`${item.question}`}</Text>
                      ) : (
                        <Text style={styles.options}>
                          {`${key + 1}: ${item.question} `}
                        </Text>
                      )}
                      {!item.paragraph && item?.question_image && (
                        <View>
                          {item?.question_image?.map((item2: any) => {
                            // console.log(`${import.meta.env.VITE_IMAGE_OAPI_URL}${item.option_1?.split("/")[3]}`);
                            return (
                              <Image
                                style={styles.image}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_QAPI_URL}${
                                    item2?.image_url.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            );
                          })}
                        </View>
                      )}
                      <View style={styles.optionContainer}>
                        {item.option_1?.split(".")[1] === "png" ||
                        item.option_1?.split(".")[1] === "jpg" ||
                        item.option_1?.split(".")[1] === "jpeg" ? (
                          <>
                            <View
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <Text style={styles.options}>A.</Text>
                              <Image
                                style={styles.optionImage}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_OAPI_URL}${
                                    item.option_1?.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            </View>

                            {/* <Text>{`${import.meta.env.VITE_IMAGE_OAPI_URL}${item.option_2?.split("/")[3]}`}</Text> */}
                            <View
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <Text style={styles.options}>B.</Text>
                              <Image
                                style={styles.optionImage}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_OAPI_URL}${
                                    item.option_2?.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            </View>
                            <View
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <Text style={styles.options}>C.</Text>
                              <Image
                                style={styles.optionImage}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_OAPI_URL}${
                                    item.option_3?.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            </View>
                            <View
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <Text style={styles.options}>D.</Text>
                              <Image
                                style={styles.optionImage}
                                src={{
                                  uri: `${import.meta.env.VITE_IMAGE_OAPI_URL}${
                                    item.option_4?.split("/")[3]
                                  }`,
                                  method: "GET",
                                  headers: { "Cache-Control": "no-cache" },
                                  body: "",
                                }}
                              />
                            </View>
                          </>
                        ) : (
                          <>
                            <Text
                              style={styles.options}
                            >{`A. ${item.option_1}`}</Text>
                            <Text
                              style={styles.options}
                            >{`A. ${item.option_2}`}</Text>
                            <Text
                              style={styles.options}
                            >{`C. ${item.option_3}`}</Text>
                            <Text
                              style={styles.options}
                            >{`D. ${item.option_4}`}</Text>
                          </>
                        )}
                      </View>
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
                      <Text style={styles.answer2}>{`${key + 1}.`}</Text>
                      {!!item.explanation ? (
                        <Text
                          style={styles.explanation}
                        >{`${item.Explanation} `}</Text>
                      ) : (
                        <Text style={styles.explanation}>No Explanation</Text>
                      )}
                    </>
                  ) : (
                    <>
                      <Text style={styles.answer2}>{`${key + 1}.`}</Text>
                      {!!item.explanation ? (
                        <Text
                          style={styles.explanation}
                        >{`${item.explanation}`}</Text>
                      ) : (
                        <Text style={styles.explanation}>No Explanation</Text>
                      )}
                    </>
                  )}
                </View>
              ))}
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PdfMaker;
