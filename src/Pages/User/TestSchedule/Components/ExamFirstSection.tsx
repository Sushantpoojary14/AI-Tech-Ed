import {
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
import { RestartAlt } from "@mui/icons-material";
type Inputs = {

  A?: string;
  B?: string;
  C?: string;
  D?: string;
  Answer: string;
};
type mutateType = {
  id: number;
  complete_status: number;
  current_timer: string;
};
type questionType = {
  id: number;
  q_id: 1;
  status_id: number;
  test_answer: null | string;
  uts_id: number;
  test_time: number;
  created_at: any;
  updated_at: any;
  questions: {
    id: number;
    question: string;
    A: string;
    B: string;
    C: string;
    D: string;
    E: string | null;
    answer: string;
    explanation: string;
    ts_id: number;
    tsc_id: number;
    tst_id: number;
    marks: null | number;
    status: number;
    created_at: null;
    updated_at: null;
  };
};

interface props {
  data: questionType | null;
  count: number;
  isLoading: boolean;
}
const ExamFirstSection = (props: props) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const [question, setQuestion] = useState<any>(null);
  const queryClient = useQueryClient();
  useEffect(() => {
    reset({
      Answer:''
    })
    setQuestion(props.data?.questions);
  }, [props.data]);
  // console.log(props.data);
  
  const updateTStatus = useMutation({
    mutationFn: async (data: any) => {
      console.log(data);
      return await tokenAxios.post(`/update-test-status/${data.id}`, {
        status_id: 1,
        test_answer:data.answer
      });
    },
    onSuccess: (res) => {
      console.log(res);
      queryClient.setQueryData(["data"], res);
      // setQuestion(res.data.question);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    updateTStatus.mutate({id:props.data?.id,answer:data.Answer});
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
            <Stack direction="column" spacing={2} margin="auto">
              <ParaText4
                text={`Question ${props.count + 1}`}
                css={{ fontWeight: "600" }}
              />
              <ParaText4
                text={question?.question}
                css={{ fontWeight: "400", maxWidth: "443px" }}
              />
            </Stack>
            <Divider orientation="vertical" flexItem sx={{}} />
            <Stack
              direction="column"
              spacing={2}
              margin={{ lg: "auto", md: "auto", sm: "auto", xs: "20px" }}
            >
              <ParaText4 text="Option" css={{ fontWeight: "600" }} />
              <form onChange={handleSubmit(onSubmit)}>
                <Controller
                  name="Answer"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      {...field}
                     
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        checked={props.data ? props.data?.test_answer=="A" :false}
                        value="A"
                        control={<Radio />}
                        label={`(A) ${question?.A}`}
                       
                      />
                      <FormControlLabel
                        value="B"
                        checked={props.data ? props.data?.test_answer=="B" :false}
                        control={<Radio />}
                        label={`(B) ${question?.B}`}
                       
                      />
                      <FormControlLabel
                        value="C"
                        checked={props.data ? props.data?.test_answer=="C" :false}
                        control={<Radio />}
                        label={`(C) ${question?.C}`}
                       
                      />
                      <FormControlLabel
                        value="D"
                        checked={props.data ? props.data?.test_answer=="D" :false}
                        control={<Radio />}
                        label={`(D) ${question?.D}`}
                       
                      />
                    </RadioGroup>
                  )}
                />
                {/* <RadioGroup {...register("number")}>
                  <FormControlLabel
                    value="A"
                    control={<Radio />}
                    label={`(A) ${question?.A}`}
                    {...register("A")}
                  />
                  <FormControlLabel
                    value="B"
                    control={<Radio />}
                    label={`(A) ${question?.B}`}
                    {...register("B")}
                  />
                  <FormControlLabel
                    value="C"
                    control={<Radio />}
                    label={`(A) ${question?.C}`}
                    {...register("C")}
                  />
                  <FormControlLabel
                    value="D"
                    control={<Radio />}
                    label={`(A) ${question?.D}`}
                    {...register("D")}
                  />
                </RadioGroup> */}
              </form>
            </Stack>
          </>
        )
      )}
    </Card>
  );
};

export default ExamFirstSection;
