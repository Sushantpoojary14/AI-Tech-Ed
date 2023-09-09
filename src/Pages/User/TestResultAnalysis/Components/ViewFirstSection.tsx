import { ParaText1, ParaText3 } from "../../../../Components/Common/ParaText";
import { Container, Stack, Card, Divider, Box } from "@mui/material";
import LoadingBar from "../../../../Components/Headers/LoadingBar";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UserContext } from "../../../../Context/UserContext";
import UseGet from "../../../../Hooks/UseGet";
import { OButton } from "../../../../Components/Common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import DemoQuestionModal from "../../../../Components/Model/DemoQuestionModal";
import tokenAxios from "../../../../Hooks/TokenAxios";

interface Detail {
  title: string;
  data: string;
}
const ViewFirstSection = ({ data }: any) => {
  const { handlePEOpen, dataSubmit } = UserContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const uniqueTopics = [
    ...new Set(
      data.data?.all_results?.weak_topics.map((item: any) => item.topic)
    ),
  ];
  // console.log("fat", uniqueTopics);
  // console.log("fat", data.data?.all_results?.weak_topics);

  const tst_id = data.data?.all_results?.weak_topics.map(
    (item: any) => item.id
  );

  const getTopicMutation = useMutation({
    mutationFn: async () => {
      return await tokenAxios.post(`/get-topic-question`, { tst_id });
    },
    onError: (error: any) => {
      console.error("Error creating user:", error.response?.data);
    },
    onSuccess: (res) => {
      if (res.status == 200) {
        setOpen(true);
      } else {
      }
    },
  });

  if (data.isLoading) {
    return <LoadingBar />;
  }

  const details: Detail[] = [
    { title: "Set Name", data: data.data?.all_results?.set_name },
    { title: "Time Taken", data: data.data?.all_results?.time_taken },
    { title: "Marks Secured", data: data.data?.all_results.total_marks },
    { title: "Total Marks", data: 35 }, //data.data?.all_results?.total_marks
    { title: "Percentage", data: data.data?.all_results?.percentage },
    { title: "Correct Answers", data: data.data?.all_results?.total_marks },
    { title: "Wrong Answers", data: 35 - data.data?.all_results?.total_marks },
    { title: "Total Questions", data: 35 },
    {
      title: "Questions Attempted",
      data: data.data?.all_results?.total_answered,
    },
    {
      title: "Weak Topics",
      data: uniqueTopics.join(", "),
    },
  ];
  return (
    <>
      <Card
        sx={{
          boxShadow: "6px 6px 20px 0px #808080",
          my: "15px",
          width: "400px",
          p: "14px",
        }}
      >
        <ParaText3 text="Your Data" />
        <Divider
          sx={{
            borderColor: "#FA8128",
            borderWidth: "3px",
            borderRadius: "3px",
            width: "90px",
          }}
        />

        <Box>
          {details?.map((item: Detail, key: number) => {
            return (
              <Stack
                flexDirection="row"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                margin="20px"
                // marginBottom="50px"
                key={key}
              >
                <ParaText3 text={item?.title} />
                <ParaText1 text={item?.data} css={{ m: "0", p: 0 }} />
              </Stack>
            );
          })}
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%" }}
        >
          <OButton
            name={getTopicMutation.isLoading ? "Loading..." : "Buy Topics"}
            func={getTopicMutation.mutate}
          />
          <Link
            to={`/user/Test-result-analysis/solution/${data.data?.all_results?.id}`}
          >
            <OButton name="View Solution" css={{ width: "170px" }} />
          </Link>
        </Stack>
      </Card>

      <DemoQuestionModal
        open={open}
        handleClose={handleClose}
        data={getTopicMutation.data}
      />
    </>
  );
};

export default ViewFirstSection;
