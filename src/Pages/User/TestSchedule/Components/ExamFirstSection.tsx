import {
  Box,
  Card,
  CardMedia,
  Divider,
  FormControlLabel,
  ImageList,
  ImageListItem,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import {
  ConverationComp,
  ParaText4,
} from "../../../../Components/Common/ParaText";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import LoadingBar from "../../../../Components/Headers/LoadingBar";
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import tokenAxios from "../../../../Hooks/TokenAxios";
import { AxiosResponse } from "axios";

type Inputs = {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  Answer: string;
};

type image = {
  id: number;
  image_url: string;
  q_id: number;
};

type questionType = {
  id: number;
  q_id: number;
  status_id: number;
  test_answer: null | string;
  uts_id: number;
  test_time: number;
  questions: {
    id: number;
    conversation?: string;
    paragraph?: string;
    question: string;
    option_1: string;
    option_2: string;
    option_3: string;
    option_4: string;
    option_5: string | null;
    correct_option: string;
    explanation: string;
    tst_id: number;
    marks: null | number;
    status: number;
    question_image: image[];
  };
};

interface props {
  data: questionType | null;
  count: number;
  isLoading: boolean;
  preventCopyPaste: (e: React.ClipboardEvent<HTMLDivElement>) => void;
  mutation: UseMutationResult<
    AxiosResponse<any, any>,
    unknown,
    {
      id: number;
      answer: string;
    },
    unknown
  >;
}
const ExamFirstSection = (props: props) => {
  const { handleSubmit, reset, control } = useForm<Inputs>();

  const [question, setQuestion] = useState<questionType | null>(null);
  const queryClient = useQueryClient();
  useEffect(() => {
    reset({
      Answer: "",
    });
    setQuestion(props.data);
  }, [props.data]);

  const updateAStatus = useMutation({
    mutationFn: async (data: { id: number; answer: string }) => {
      console.log(data);
      return await tokenAxios.post(`/update-test-status/${data.id}`, {
        status_id: 1,
        test_answer: data.answer,
      });
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.setQueryData(["question-data"], res);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset({
      Answer: "",
    });
    setQuestion((prevQuestion: any) => ({
      ...prevQuestion,
      test_answer: data.Answer,
      status_id: 1,
    }));

    props.data &&
      props.mutation.mutate({ id: props.data?.id, answer: data.Answer });
  };
  // console.log(question?.questions);
  return (
    <Card
      sx={{
        boxShadow: "6px 6px 20px 0px #808080",
        display: "flex",
        flexDirection: "column",
        width: "70%",
        paddingX: "10px",
      }}
    >
      {props.isLoading ? (
        <LoadingBar />
      ) : (
        props.data && (
          <>
            <Box width="950px" marginX="auto" marginTop={3}>
              <ParaText4
                text={`Question ${props.count + 1}`}
                css={{ fontWeight: "600" }}
              />
              <Divider orientation="horizontal" />
            </Box>
            <Stack
              direction="column"
              spacing={5}
              marginX="auto"
              marginTop={3}
              maxWidth="950px"
              maxHeight="550px"
              sx={{
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: 2,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "white",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "gray",
                  borderRadius: 2,
                },
              }}
              onCopy={(e) => props.preventCopyPaste(e)}
            >
              <Stack>
                {question && (
                  <>
                    {!!question?.questions.conversation ||
                    !!question?.questions.paragraph ? (
                      <>
                        {question?.questions.paragraph && (
                          <ParaText4
                            text={question.questions.paragraph}
                            css={{ fontWeight: "400", marginBottom: "10px" }}
                          />
                        )}
                        {question?.questions.question_image &&
                          question?.questions.question_image.length !== 0 && (
                            <ImageList
                              sx={{
                                width: "100%",
                                // maxHeight: "340px",
                                maxWidth: "hidden",
                                display: "flex",
                                flexDirection: "row", // Horizontal layout
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: "1rem",
                              }}
                              cols={3}
                              gap={7}
                              // rowHeight={164}
                            >
                              {question?.questions.question_image.map(
                                (item: image, key: number) => (
                                  <ImageListItem
                                    key={key}
                                    // sx={{ width: "200px" }}
                                  >
                                    <img
                                      src={
                                        import.meta.env.VITE_IMAGE_URL +
                                        item.image_url
                                      }
                                      alt={`Image ${key}`}
                                      // style={{ maxWidth: "200px" }}
                                    />
                                  </ImageListItem>
                                )
                              )}
                            </ImageList>
                          )}
                        {question.questions.conversation && (
                          <ConverationComp
                            text={question.questions.conversation}
                          />

                          // <ParaText4
                          //   text={question.questions.conversation}
                          //   css={{ fontWeight: "400", marginBottom: "10px" }}
                          // />
                        )}
                        <ParaText4
                          text={question.questions.question}
                          css={{ fontWeight: "400", marginBottom: "10px" }}
                        />
                      </>
                    ) : (
                      <>
                        <ParaText4
                          text={question.questions.question}
                          css={{ fontWeight: "400", marginBottom: "10px" }}
                        />

                        {question?.questions.question_image &&
                          question?.questions.question_image.length !== 0 && (
                            <ImageList
                              sx={{
                                width: "100%",
                                // maxHeight: "340px",
                                maxWidth: "hidden",
                                flex: "column",
                                justifyContent: "space-between",
                              }}
                              cols={3}
                              gap={7}
                              // rowHeight={164}
                            >
                              {question?.questions.question_image.map(
                                (item: image, key: number) => (
                                  <ImageListItem
                                    key={key}
                                    sx={{ minWidth: "200px" }}
                                  >
                                    <img
                                      src={
                                        import.meta.env.VITE_IMAGE_URL +
                                        item.image_url
                                      }
                                      style={{
                                        // minWidth: "150px",
                                        objectFit: "cover",
                                      }}
                                      alt={`Image ${key}`}
                                    />
                                  </ImageListItem>
                                )
                              )}
                            </ImageList>
                          )}
                      </>
                    )}
                  </>
                )}
              </Stack>
              <Stack>
                {/* <ParaText4 text="Option" css={{ fontWeight: "600" }} /> */}
                <form onChange={handleSubmit(onSubmit)}>
                  <Controller
                    name="Answer"
                    defaultValue=""
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} name="radio-buttons-group">
                        <Stack direction={"row"} mb={1}>
                          <FormControlLabel
                            checked={
                              props.data ? question?.test_answer == "A" : false
                            }
                            value="A"
                            control={<Radio />}
                            label={`${
                              question?.questions.option_1.endsWith(
                                ".png" || ".jpeg" || ".jpg"
                              )
                                ? ""
                                : question?.questions.option_1
                            }`}
                          />
                          {question?.questions.option_1.endsWith(
                            ".png" || ".jpeg" || ".jpg"
                          ) && (
                            <img
                              src={
                                import.meta.env.VITE_IMAGE_URL +
                                question?.questions.option_1
                              }
                              style={{ maxWidth: "200px" }}
                            />
                          )}
                        </Stack>

                        <Stack direction={"row"} mb={1}>
                          <FormControlLabel
                            value="B"
                            checked={
                              props.data ? question?.test_answer == "B" : false
                            }
                            control={<Radio />}
                            label={`B. ${
                              question?.questions.option_1.endsWith(
                                ".png" || ".jpeg" || ".jpg"
                              )
                                ? ""
                                : question?.questions.option_2
                            }`}
                          />
                          {question?.questions.option_1.endsWith(
                            ".png" || ".jpeg" || ".jpg"
                          ) && (
                            <img
                              src={
                                import.meta.env.VITE_IMAGE_URL +
                                question?.questions.option_2
                              }
                              style={{ maxWidth: "200px" }}
                            />
                          )}
                        </Stack>
                        <Stack direction={"row"} mb={1}>
                          <FormControlLabel
                            value="C"
                            checked={
                              props.data ? question?.test_answer == "C" : false
                            }
                            control={<Radio />}
                            label={`C.  ${
                              question?.questions.option_1.endsWith(
                                ".png" || ".jpeg" || ".jpg"
                              )
                                ? ""
                                : question?.questions.option_3
                            }`}
                          />
                          {question?.questions.option_1.endsWith(
                            ".png" || ".jpeg" || ".jpg"
                          ) && (
                            <img
                              src={
                                import.meta.env.VITE_IMAGE_URL +
                                question?.questions.option_3
                              }
                              style={{ maxWidth: "200px" }}
                            />
                          )}
                        </Stack>
                        <Stack direction={"row"} mb={1}>
                          <FormControlLabel
                            value="D"
                            checked={
                              props.data ? question?.test_answer == "D" : false
                            }
                            control={<Radio />}
                            label={`D. ${
                              question?.questions.option_1.endsWith(
                                ".png" || ".jpeg" || ".jpg"
                              )
                                ? ""
                                : question?.questions.option_4
                            }`}
                          />
                          {question?.questions.option_1.endsWith(
                            ".png" || ".jpeg" || ".jpg"
                          ) && (
                            <img
                              src={
                                import.meta.env.VITE_IMAGE_URL +
                                question?.questions.option_4
                              }
                              style={{ maxWidth: "200px" }}
                            />
                          )}
                        </Stack>
                      </RadioGroup>
                    )}
                  />
                </form>
              </Stack>
            </Stack>
          </>
        )
      )}
    </Card>
  );
};

export default ExamFirstSection;
