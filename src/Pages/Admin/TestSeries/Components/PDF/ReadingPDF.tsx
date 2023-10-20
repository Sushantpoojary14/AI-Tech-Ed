import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import {
  ParaText3,
  ParaText4,
} from "../../../../../Components/Common/ParaText";

const styles = {
  //     pageBreak: {
  // breakAfter: "page"
  //     },
  page: {
    padding: 20,
    // breakAfter: "page",
  },
  section: {
    margin: 10,
  },
  mainContainer: {
    // marginTop: 3,
    // padding: 10,
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
    fontSize: 16,
    margin: 0,
  },
  conversation: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  paragraph: {
    // fontSize: 12,
    // marginTop: 5,
    // marginBottom: 5,
  },
  optionContainer: {
    padding: 2,
    marginTop: 6,
    marginBottom: 10,

    // border: "1pt solid #000",
  },
  options: {
    fontSize: 16,
    // marginTop: 2,
    marginBottom: 2,
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
    maxWidth: "150px",
    height: "110px",
  },
  optionImage: {
    width: "100px",
    height: "100px",
    marginBottom: 5,
    marginLeft: 5,
  },
  mainText: {
    fontSize: 16,
    fontWeight: 700,
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
  option_1?: any;
  option_2?: any;
  option_3?: any;
  option_4?: any;
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
  images?: any;
  question_image?: any;
};

const ReadingPDF = ({ props }: any) => {
  const { selected_question, topic, index } = props;
  let count = 1;
  return (
    <Box>
      <Box className="break-after-page px-10">
        {/* <div style={styles.header}>{topic?.toUpperCase()}</div> */}
        <div style={styles.mainContainer}>
          {selected_question?.length != 0 &&
            selected_question?.map((item: questions, key: any) => {
              const index_data: any = index?.find((item: any) =>
                item.element.includes(count)
              );
              // if(){

              // }
              // console.log(item.paragraph?.split(":")[0]);
              // console.log(item.paragraph?.split(":")[1]);
              // console.log();
              const para = item.paragraph ? item.paragraph?.split("::") : "";
              const counts: any = [];
              const new_par = para[1]
                .split(".")
                .filter((item2) => {
                  return item2 != "";
                })
                .map((item, key) => {
                  const random = Math.round(Math.random() * 3) + 1;

                  if (!counts.includes(key)) {
                    const text = [];
                    for (let index = 0; index < random; index++) {
                      text.push(para[1].split(".")[key + index]);
                      counts.push(key++);
                    }
                    //  console.log(text.join('.'));
                    return text.join(".");
                  }
                  return null;
                })
                .filter((item2) => {
                  return item2 != null && item2 != "";
                });
              console.log(new_par);

              count++;
              return (
                <div
                  style={styles.Container}
                  key={key}
                  className={`${
                    key + 1 == index_data.start
                      ? "break-before-page"
                      : "page-break-inside: avoid"
                  } mt-4`}
                >
                  {index &&
                    index?.length != 0 &&
                    index_data &&
                    key + 1 == index_data.start && (
                      <Stack>
                        <Typography
                          marginBottom={1}
                        >{`Read the extracts below then answer the question`}</Typography>
                        <Typography
                          textAlign={"center"}
                          fontSize={"30px"}
                          marginY={4}
                        >
                          {para[0]}
                        </Typography>
                      </Stack>
                    )}
                  {item?.Options ? (
                    <>
                      {item.Paragraph && (
                        <Stack flexDirection={"row"} columnGap={1}>
                          <Typography sx={styles.mainText} className="">{`${
                            key + 1
                          }: `}</Typography>

                          <Typography>{` ${item.paragraph}`}</Typography>
                        </Stack>
                      )}
                      {item.paragraph && item?.question_image && (
                        <div>
                          {item?.question_image?.map(
                            (item2: any, key: number) => {
                              return (
                                <img
                                  key={key}
                                  style={styles.image}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item2?.image_url
                                  }
                                />
                              );
                            }
                          )}
                        </div>
                      )}

                      <Typography>{` ${item.Question}`}</Typography>

                      {!item.paragraph && item?.question_image && (
                        <div>
                          {item?.question_image?.map(
                            (item2: any, key: number) => {
                              return (
                                <img
                                  key={key}
                                  style={styles.image}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item2?.image_url
                                  }
                                />
                              );
                            }
                          )}
                        </div>
                      )}
                      {!item.paragraph && item?.images && (
                        <Stack flexDirection={"row"} columnGap={16}>
                          {item?.images?.map((item2: any, key: number) => {
                            return (
                              <img
                                key={key}
                                style={styles.image}
                                src={import.meta.env.VITE_IMAGE_URL + item2}
                              />
                            );
                          })}
                        </Stack>
                      )}
                      {item?.question_image && (
                        <div>
                          {item?.question_image.map(
                            (item2: any, key: number) => {
                              return (
                                <img
                                  key={key}
                                  style={styles.image}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item2?.image_url
                                  }
                                />
                              );
                            }
                          )}
                        </div>
                      )}
                      <div style={styles.optionContainer} className="mb-4">
                        <p style={styles.options}>{`A. ${item.Options.a}`}</p>
                        <p style={styles.options}>{`B. ${item.Options.b}`}</p>
                        <p style={styles.options}>{`C. ${item.Options.c}`}</p>
                        <p style={styles.options}>{`D. ${item.Options.d}`}</p>
                      </div>
                    </>
                  ) : (
                    <Stack
                      spacing={1}
                      marginBottom={3}
                      className={`${
                        key + 1 == index_data.start
                          ? "break-after-page"
                          : "page-break-inside: avoid"
                      }`}
                    >
                      {key + 1 == index_data.start && new_par && (
                        <Stack spacing={2}>
                          <Box>
                            {new_par.map((item2: string | null) => {
                              return (
                                <Typography sx={{ mt: "10px" }}>
                                  {`${item2}.`}
                                </Typography>
                              );
                            })}
                          </Box>
                          <ParaText4
                            text={
                              <span>
                                For questions
                                <strong>
                                  {` ${index_data.start} - ${index_data.end} `}
                                </strong>
                                choose the option <strong>(A,B,C or D)</strong>{" "}
                                which think the best answers the question
                              </span>
                            }
                          />
                        </Stack>
                      )}
                      {item?.paragraph && item?.images && (
                        <div>
                          {item?.images?.map((item2: any, key: any) => {
                            return (
                              <img
                                key={key}
                                style={styles.image}
                                src={
                                  import.meta.env.VITE_IMAGE_URL +
                                  item2?.image_url
                                }
                              />
                            );
                          })}
                        </div>
                      )}

                      {item.question && (
                        <Stack
                          paddingTop={1}
                          marginTop={0}
                          flexDirection={"row"}
                          columnGap={2}
                          
                        >
                          <Typography padding={0}>{key + 1}</Typography>
                          <Typography
                            padding={0}
                          >{`${item.question}`}</Typography>
                        </Stack>
                      )}

                      {!item?.paragraph && item?.question_image && (
                        <div>
                          {item?.question_image?.map(
                            (item2: any, key: number) => {
                              return (
                                <img
                                  key={key}
                                  style={styles.image}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item2?.image_url
                                  }
                                />
                              );
                            }
                          )}
                        </div>
                      )}
                      {!!item?.paragraph && item?.question_image && (
                        <Stack flexDirection={"row"} columnGap={16}>
                          {item?.question_image?.map(
                            (item2: any, key: number) => {
                              return (
                                <img
                                  key={key}
                                  style={styles.image}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item2?.image_url
                                  }
                                />
                              );
                            }
                          )}
                        </Stack>
                      )}

                      <Stack marginY={""} paddingX={"50px"}>
                        <Typography>
                          <span><strong>A </strong>{`${item?.option_1}`}</span>
                        </Typography>
                        <Typography>
                          <span><strong>B </strong>{`${item?.option_2}`}</span>
                        </Typography>
                        <Typography>
                          <span><strong>C </strong>{`${item?.option_3}`}</span>
                        </Typography>
                        <Typography>
                          <span><strong>D </strong>{`${item?.option_4}`}</span>
                        </Typography>
                      
                      </Stack>
                    </Stack>
                  )}
                </div>
              );
            })}
        </div>
      </Box>
      <Box style={styles.page}>
        <div style={styles.mainContainer} className="break-after-page">
          <div style={styles.header2}>Answers:</div>
          <div style={styles.Container}>
            {selected_question?.length != 0 &&
              selected_question?.map((item: questions, key: any) => (
                <p style={styles.answer} key={key}>
                  {item?.Answer
                    ? `${key + 1}.  ${item?.Answer?.toUpperCase()}`
                    : `${key + 1}.  ${item?.correct_option}`}
                </p>
              ))}
          </div>
        </div>
        <div style={styles.mainContainer} className="mt-4">
          <p style={styles.header2}>Explanation:</p>
          {selected_question?.length != 0 &&
            selected_question?.map((item: questions, key: any) => (
              <div style={styles.Container} key={key}>
                {item?.Answer ? (
                  <>
                    <p style={styles.answer2}>{`${key + 1}.`}</p>
                    {!!item?.Explanation ? (
                      <p
                      //   style={styles.explanation}
                      >{`${item?.Explanation} `}</p>
                    ) : (
                      <p
                      // style={styles.explanation}
                      >
                        No Explanation
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p style={styles.answer2}>{`${key + 1}.`}</p>
                    {!!item?.explanation ? (
                      <p
                      //   style={styles.explanation}
                      >{`${item.explanation}`}</p>
                    ) : (
                      <p
                      // style={styles.explanation}
                      >
                        No Explanation
                      </p>
                    )}
                  </>
                )}
              </div>
            ))}
        </div>
      </Box>
    </Box>
  );
};

export default ReadingPDF;
