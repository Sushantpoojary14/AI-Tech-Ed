import { Box, Stack, Typography } from "@mui/material";
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
    marginTop: 2,
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

const DefaultPDf = ({ props }: any) => {
  const { selected_question, topic, index } = props;
  let count = 1;
  return (
    <Box>
      <Box style={styles.page} className="break-after-page">
        <div style={styles.header}>{topic?.toUpperCase()}</div>
        <div style={styles.mainContainer}>
          {selected_question?.length != 0 &&
            selected_question?.map((item: questions, key: any) => {
              const index_data: any = index?.find((item: any) =>
                item.element.includes(count)
              );
              count++;
              return (
                <div
                  style={styles.Container}
                  key={key}
                  className={`${
                    (key + 1) % 3 === 0 ? "break-after-page" : ""
                  }  mt-8`}
                >
                  {index && index?.length != 0 && index_data && (
                    <Stack spacing={2} marginBottom={3}>
                      <ParaText4
                        text={`${index_data.start} - ${index_data.end}): For questions ${index_data.start} - ${index_data.end} choose the option (A,B,C or D) which think the best answers the question`}
                        css={{ fontWeight: "500" }}
                      />
                      <ParaText3
                        text={`Read the extracts below then answer the question`}
                        css={{ fontWeight: "500" }}
                      />
                    </Stack>
                  )}
                  {item?.Options ? (
                    <>
                      {item.Paragraph && (
                        <Stack flexDirection={"row"} columnGap={1}>
                          <Typography sx={styles.mainText} className="">{`${
                            key + 1
                          }: `}</Typography>
                          <Typography>{` ${item.Paragraph}`}</Typography>
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
                      {item.Conversation && (
                        <Typography sx={{ my: "10px" }}>
                          {`${item.Conversation}`}
                        </Typography>
                      )}
                      {item.Conversation || item.Paragraph ? (
                        <Typography
                          sx={{ mt: "10px", mb: "20px", fontSize: "16px" }}
                        >{`${item.Question}`}</Typography>
                      ) : (
                        <Stack flexDirection={"row"} columnGap={1}>
                          <Typography sx={styles.mainText} className="">{`${
                            key + 1
                          }: `}</Typography>
                          <Typography>{` ${item.Question}`}</Typography>
                        </Stack>
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
                    <>
                      {item?.paragraph && (
                        <Typography sx={{ my: "10px" }}>
                          {`${key + 1}: ${item.paragraph}`}
                        </Typography>
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
                      {item.conversation && (
                        <Typography sx={{ my: "10px" }}>
                          {`${item.conversation}`}
                        </Typography>
                      )}

                      {item.conversation || item.paragraph ? (
                        <Typography
                          sx={{ mt: "10px", mb: "20px", fontSize: "16px" }}
                        >{`${item.question}`}</Typography>
                      ) : (
                        <Stack flexDirection={"row"} columnGap={1}>
                          <Typography sx={styles.mainText} className="">{`${
                            key + 1
                          }: `}</Typography>
                          <Typography>{` ${item.question}`}</Typography>
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
                      <div style={styles.optionContainer}>
                        {item?.option_1?.split(".")[1] === "png" ||
                        item?.option_1?.split(".")[1] === "jpg" ||
                        item?.option_1?.split(".")[1] === "jpeg" ? (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                // flexDirection: "row",
                              }}
                            >
                              <p style={styles.options}>A.</p>
                              <img
                                style={styles.optionImage}
                                src={
                                  import.meta.env.VITE_IMAGE_URL + item.option_1
                                }
                              />
                            </div>

                            {/* <Text>{`${import.meta.env.VITE_IMAGE_OAPI_URL}${item.option_2?.split("/")[3]}`}</Text> */}
                            <div
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                // flexDirection: "row",
                              }}
                            >
                              <p style={styles.options}>B.</p>
                              <img
                                style={styles.optionImage}
                                src={
                                  import.meta.env.VITE_IMAGE_URL + item.option_2
                                }
                              />
                            </div>
                            <div
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                // flexDirection: "row",
                              }}
                            >
                              <p style={styles.options}>C.</p>
                              <img
                                style={styles.optionImage}
                                src={
                                  import.meta.env.VITE_IMAGE_URL + item.option_3
                                }
                              />
                            </div>
                            <div
                              style={{
                                ...styles.optionContainer,
                                display: "flex",
                                // flexDirection: "row",
                              }}
                            >
                              <p style={styles.options}>D.</p>
                              <img
                                style={styles.optionImage}
                                src={
                                  import.meta.env.VITE_IMAGE_URL + item.option_4
                                }
                              />
                            </div>
                          </div>
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

export default DefaultPDf;
