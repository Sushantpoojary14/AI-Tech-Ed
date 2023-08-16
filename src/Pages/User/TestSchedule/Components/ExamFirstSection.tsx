import {
  Box,
  Card,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { ParaText4 } from "../../../../Components/Common/ParaText";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import LoadingBar from "../../../../Components/Headers/LoadingBar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import tokenAxios from "../../../../Hooks/TokenAxios";

type Inputs = {
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  Answer: string;
};

type questionType = {
  id: number;
  q_id: 1;
  status_id: number;
  test_answer: null | string;
  uts_id: number;
  test_time: number;
  questions: {
    id: number;
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
  };
};

interface props {
  data: questionType | null;
  count: number;
  isLoading: boolean;
  preventCopyPaste: (e:  React.ClipboardEvent<HTMLDivElement>) => void;

}
const ExamFirstSection = (props: props) => {
  const {
    handleSubmit,
    reset,
    control,

  } = useForm<Inputs>();

  const [question, setQuestion] = useState<questionType | null>(null);
  const queryClient = useQueryClient();
  useEffect(() => {
    reset({
      Answer: "",
    });
    setQuestion(props.data);
  }, [props.data]);

  const updateAstatus = useMutation({
    mutationFn: async (data: {id:number,answer:string}) => {
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
      status_id:1
    }));

    console.log(question?.test_answer);
    props.data && updateAstatus.mutate({ id: props.data?.id, answer: data.Answer });
  };
  return (
    <Card
      sx={{
        boxShadow: "6px 6px 20px 0px #808080",
        mb: "15px",
        display: "flex",
        flexDirection: { lg: "row", md: "row", sm: "row", xs: "column" },
        p: "25px",
        width: "1000px",
      }}
    >
      {props.isLoading ? (
        <LoadingBar />
      ) : (
        props.data && (
          <>
            <Stack
              direction="column"
              spacing={2}
              margin="auto"
              sx={{}}
              onCopy={(e) => props.preventCopyPaste(e)}
            >
              <ParaText4
                text={`Question ${props.count + 1}`}
                css={{ fontWeight: "600" }}
              />
              <Box sx={{overflow: 'auto', maxHeight:'500px'}}>
            {  question&&  <ParaText4
                text={question?.questions.question}
                css={{ fontWeight: "400", maxWidth: "443px" }}
              />}
              </Box>
            
            </Stack>
            <Divider orientation="vertical" flexItem sx={{}} />
            <Stack
              direction="column"
              spacing={2}
              margin={{ lg: "auto", md: "auto", sm: "auto", xs: "20px" }}
              onCopy={(e) => props.preventCopyPaste(e)}
            >
              <ParaText4 text="Option" css={{ fontWeight: "600" }} />
              <form onChange={handleSubmit(onSubmit)}>
                <Controller
                  name="Answer"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field} name="radio-buttons-group">
                      <FormControlLabel
                        checked={
                          props.data ? question?.test_answer == "1" : false
                        }
                        value="1"
                        control={<Radio />}
                        label={`(A) ${question?.questions.option_1}`}
                      />
                      <FormControlLabel
                        value="2"
                        checked={
                          props.data ? question?.test_answer == "2" : false
                        }
                        control={<Radio />}
                        label={`(B) ${question?.questions.option_2}`}
                      />
                      <FormControlLabel
                        value="3"
                        checked={
                          props.data ? question?.test_answer == "3" : false
                        }
                        control={<Radio />}
                        label={`(C) ${question?.questions.option_3}`}
                      />
                      <FormControlLabel
                        value="4"
                        checked={
                          props.data ? question?.test_answer == "4" : false
                        }
                        control={<Radio />}
                        label={`(D) ${question?.questions.option_4}`}
                      />
                    </RadioGroup>
                  )}
                />
              </form>
            </Stack>
          </>
        )
      )}
    </Card>
  );
};

export default ExamFirstSection;
