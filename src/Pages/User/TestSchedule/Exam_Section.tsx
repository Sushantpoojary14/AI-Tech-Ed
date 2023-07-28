import { Container, Stack, Button, Box } from "@mui/material";
import { Header1 } from "../../../Components/Common/HeaderText";
import { ParaText3, ParaText4 } from "../../../Components/Common/ParaText";
import ExamFirstSection from "./Components/ExamFirstSection";
import ExamSecondSection from "./Components/ExamSecondSection";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import tokenAxios from "../../../Hooks/TokenAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { OButton, WButton } from "../../../Components/Common/Button";
import { AppContext } from "../../../Context/AppContext";
import { useEffect, useState } from "react";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { useTimer } from "react-timer-hook";

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
const Exam_Section = () => {
  const queryClient = useQueryClient();

  const params = useParams();
  const { user } = AppContext();
  const [timer, setTimer] = useState<boolean>(true);
  const [question, setQuestion] = useState<questionType | null>(null);
  const [questions, setQuestions] = useState<questionType[] | []>([]);
  const [count, setCount] = useState<number>(0);

  const updateTStatus = useMutation({
    mutationFn: async (data: mutateType) => {
      console.log(data);
      return await tokenAxios.post(`/update-test-status/${data.id}`, {
        status_id: data.complete_status,
        current_timer: data.current_timer,
      });
    },
    onSuccess: (res) => {
      queryClient.setQueryData(["data"], res);
    },
  });

  const updateTimer = useMutation({
    mutationFn: async ({
      id,
      current_timer,
    }: {
      id: number;
      current_timer: string;
    }) => {
      console.log(data);
      return await tokenAxios.post(`/update-test-timer/${id}`, {
        current_timer: current_timer,
      });
    },
    onSuccess: (res) => {
      console.log(res);
      
    },
  });

  const { isLoading, data } = useQuery(
    ["data"],
    async () => await tokenAxios.get(`/generate-question/${params.id}`)
  );

  const time = data?.data?.timer
    ? new Date(Date.now() + parseFloat(data?.data?.timer) * 60 * 1000)
    : new Date(Date.now() + 60 * 1000);

  const { seconds, minutes, restart, start } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    if (data?.data?.timer && timer) {
      const time = new Date(
        Date.now() + parseFloat(data?.data?.timer) * 60 * 1000
      );
      restart(time);
      setTimer(false);
    }

    setQuestions(data?.data.test_data);
    questions?.filter((item: questionType, key: number) => {
      if (item.id === data?.data.current_qid) {
        setCount(key);
        setQuestion(item);
      }
    });
  }, [data, questions]);

  const paginate = (id: number, key: number) => {
    updateTStatus.mutate({
      id: id,
      complete_status:
        questions && questions[key].status_id === 3
          ? 2
          : questions[key].status_id,
      current_timer: `${minutes}.${seconds}`,
    });
  };

  useEffect(() => {
    submitTimer(false);
  }, [minutes]);


  const submitTimer = (nav:boolean)=>{
    question &&  updateTimer.mutate({
      id:question?.uts_id,
      current_timer: `${minutes}.${seconds}`,
    });
    nav && console.log('nav');
    

  }

  const MarkForReview = () => {
    console.log(question?.test_answer);
    updateTStatus.mutate({
      id: data?.data.current_qid,
      complete_status: question?.test_answer ? 5 : 4,
      current_timer: `${minutes}.${seconds}`,
    });
  };

  const ClearResponse = () => {
    updateTStatus.mutate({
      id: data?.data.current_qid,
      complete_status: 2,
      current_timer: `${minutes}.${seconds}`,
    });
  };

  const Save = () => {
    updateTStatus.mutate({
      id: data?.data.current_qid,
      complete_status: 2,
      current_timer: `${minutes}.${seconds}`,
    });
  };
  return (
    <Container maxWidth="xl">
      <Stack direction={"column"}>
        <Stack
          sx={{ width: "100%", my: "5px" }}
          direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        >
          <Header1 header="Section" />
          <ParaText3
            text={`Time Remaining: ${minutes}:${seconds}`}
            css={{ margin: "auto" }}
          />
          <Stack
            direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
            spacing={2}
          >
            <Button
              variant="outlined"
              sx={{
                width: "45px",
                height: "45px",
                color: "#FA8128",
                border: "1px solid #FA8128",
                backgroundColor: "#FFFFFF",
                marginY: "auto",
              }}
            >
              <Person2OutlinedIcon sx={{ width: "30px", height: "30px" }} />
            </Button>
            <Box>
              {user && (
                <ParaText3 text={user?.name} css={{ fontWeight: "500" }} />
              )}
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
          spacing={2}
          sx={{ width: "100%", my: "15px" }}
        >
          <ExamFirstSection
            data={question}
            count={count}
            isLoading={isLoading}
          />
          <ExamSecondSection questions={questions} func={paginate} />
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <OButton
            name="MARKED FOR REVIEW"
            css={{ width: "220px" }}
            func={MarkForReview}
          />
          <OButton name="CLEAR RESPONSE" css={{ width: "220px" }} />

            <OButton
              name="SAVE & CONTINUE LATER"
              css={{ width: "300px" }}
              func={()=>submitTimer(true)}
            />
          
          {/* <WButton name="SAVE & NEXT" /> */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Exam_Section;
