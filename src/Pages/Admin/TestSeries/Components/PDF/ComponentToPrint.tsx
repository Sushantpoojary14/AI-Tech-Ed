import { Box } from "@mui/material";
import React from "react";

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

const ComponentToPrint = React.forwardRef((props: any, ref: any) => {
  const { selected_question, topic } = props;
  // console.log("DATA", selected_question);

  return (
    <div ref={ref}>
      <>
        {/* <img
          src="http://127.0.0.1:8000/NVImages/oImage/option_A_15.png"
          alt=""
        /> */}

        <Box>
          <Box style={styles.page} className="break-after-page">
            <div style={styles.header}>{topic?.toUpperCase()}</div>
            <div style={styles.mainContainer}>
              {selected_question?.length != 0 &&
                selected_question?.map((item: questions, key: any) => (
                  <div
                    style={styles.Container}
                    key={key}
                    // className={key % 2 === 0 ? "" : "break-after-page"}
                  >
                    {item?.Options ? (
                      <>
                        {item.Paragraph && (
                          <p style={styles.paragraph}>
                            <p style={styles.mainText}>{`${key + 1}: `}</p>
                            {` ${item.Paragraph}`}
                          </p>
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
                        {item.Conversation && (
                          <p style={styles.conversation}>
                            {`${item.Conversation}`}
                          </p>
                        )}
                        {item.Conversation || item.Paragraph ? (
                          <p style={styles.question}>{`${item.Question}`}</p>
                        ) : (
                          <p style={styles.question}>
                            <p style={styles.mainText}>{`${key + 1}: `}</p>
                            {item.Question}
                          </p>
                        )}
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
                      <>
                        {item?.paragraph && (
                          <p style={styles.paragraph}>
                            {`${key + 1}: ${item.paragraph}`}
                          </p>
                        )}
                        {item?.paragraph && item?.question_image && (
                          <div>
                            {item?.question_image?.map(
                              (item2: any, key: any) => {
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
                        {item?.conversation && (
                          <p style={styles.conversation}>
                            {`${item.conversation}`}
                          </p>
                        )}
                        {item?.conversation || item?.paragraph ? (
                          <p style={styles.question}>{`${item.question}`}</p>
                        ) : (
                          <p style={styles.options}>
                            {`${key + 1}: ${item?.question} `}
                          </p>
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
                        <div style={styles.optionContainer}>
                          {item?.option_1?.split(".")[1] === "png" ||
                          item?.option_1?.split(".")[1] === "jpg" ||
                          item?.option_1?.split(".")[1] === "jpeg" ? (
                            <>
                              <div
                                style={{
                                  ...styles.optionContainer,
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <p style={styles.options}>A.</p>
                                <img
                                  style={styles.optionImage}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item.option_1
                                  }
                                />
                              </div>

                              {/* <Text>{`${import.meta.env.VITE_IMAGE_OAPI_URL}${item.option_2?.split("/")[3]}`}</Text> */}
                              <div
                                style={{
                                  ...styles.optionContainer,
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <p style={styles.options}>B.</p>
                                <img
                                  style={styles.optionImage}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item.option_2
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  ...styles.optionContainer,
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <p style={styles.options}>C.</p>
                                <img
                                  style={styles.optionImage}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item.option_3
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  ...styles.optionContainer,
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                <p style={styles.options}>D.</p>
                                <img
                                  style={styles.optionImage}
                                  src={
                                    import.meta.env.VITE_IMAGE_URL +
                                    item.option_4
                                  }
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <p
                                style={styles.options}
                              >{`A. ${item?.option_1}`}</p>
                              <p
                                style={styles.options}
                              >{`B. ${item?.option_2}`}</p>
                              <p
                                style={styles.options}
                              >{`C. ${item?.option_3}`}</p>
                              <p
                                style={styles.options}
                              >{`D. ${item?.option_4}`}</p>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </Box>
          <Box style={styles.page}>
            <div style={styles.mainContainer}>
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
            <div style={styles.mainContainer}>
              <p style={styles.header2}>Explanation:</p>
              {selected_question?.length != 0 &&
                selected_question?.map((item: questions, key: any) => (
                  <div style={styles.Container} key={key}>
                    {item?.Answer ? (
                      <>
                        <p style={styles.answer2}>{`${key + 1}.`}</p>
                        {!!item?.explanation ? (
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
      </>
    </div>
  );
});

export default ComponentToPrint;
