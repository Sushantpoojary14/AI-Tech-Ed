import { Container, Stack, Button, Box } from "@mui/material";
import { Header1 } from "../../../Components/Common/HeaderText";
import { ParaText3, ParaText4 } from "../../../Components/Common/ParaText";
import ExamFirstSection from "./Components/ExamFirstSection";
import ExamSecondSection from "./Components/ExamSecondSection";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import tokenAxios from "../../../Hooks/TokenAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { OButton, WButton } from "../../../Components/Common/Button";
import { AppContext } from "../../../Context/AppContext";
import { useEffect, useState } from "react";

const Exam_Section = () => {
  const params = useParams();
  const { user } = AppContext();
  

  const { isLoading, data, refetch } = useQuery([], () =>
    tokenAxios.get(`/generate-question/${params.id}`)
  );

  const questions = data?.data.test_data;
  
  const [question, setQustion] = useState<any>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(()=>{
    questions && setQustion(questions[count])
  },[count])
  console.log(question);
  
  // const paginate = (id:number)=>{
  //   setQustion(questions[id])
  // }

  return (
    <Container maxWidth="xl">
      <Stack direction={"column"}>
        <Stack
          sx={{ width: "100%", my: "5px" }}
          direction={{ lg: "row", md: "row", sm: "row", xs: "column" }}
        >
          <Header1 header="Section" />
          <ParaText3 text="Time Remaining: 30.30" css={{ margin: "auto" }} />
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
          <ExamFirstSection data={question} count={count}/>
          <ExamSecondSection questions={questions} func={setCount}/>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <OButton name="MARKED FOR REVIEW" css={{ width: "220px" }} />
          <OButton name="CLEAR RESPONSE" css={{ width: "220px" }} />
          <OButton name="SAVE & CONTINUE LATER" css={{ width: "300px" }} />
          <WButton name="SAVE & NEXT"/>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Exam_Section;
