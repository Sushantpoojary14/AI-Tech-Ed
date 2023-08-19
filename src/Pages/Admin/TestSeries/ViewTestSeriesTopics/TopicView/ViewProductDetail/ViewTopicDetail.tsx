import { Box, Button, Container, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SectionOne from "./TSectionOne";
import { useQuery } from "@tanstack/react-query";
import TSectionOne from "./TSectionOne";
import adminTokenAxios from "../../../../../../Hooks/AdminTokenAxios";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

import { Header1 } from "../../../../../../Components/Common/HeaderText";

const ViewTopicDetail = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  console.log(topicId);

  const testSeries = useQuery({
    queryKey: ["TestSeriesTopics", topicId],
    queryFn: async () => {
      return await adminTokenAxios.get(`admin/show-topics-details/${topicId}`);
    },
  });

  console.log(testSeries?.data?.data);

  if (testSeries.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <Stack marginTop={2} direction="row">
        <Button
          onClick={() => navigate(-1)}
          size="small"
          variant="contained"
          color="primary"
          sx={{ paddingRight: "1rem" }}
        >
          <ArrowBackIosNewRoundedIcon />
          Back
        </Button>

        <Stack
          direction="row"
          sx={{
            // my: "18px",
            justifyContent: "center",
            mx: "auto",
            pr: { lg: "100px", xs: "0px", sm: "100px", md: "100px" },
          }}
        >
          <AssignmentOutlinedIcon
            sx={{
              height: "28px",
              width: "28px",
              color: "#FA8128",
              mx: "8px",
              my: "auto",
            }}
          />
          <Header1 header="Topic wise Questions" />
        </Stack>
      </Stack>
      <Stack
        mt={2}
        // direction="row"
        spacing={2}
        // flexWrap="wrap"
        // sx={{ width: "100%" }}
      >
        <TSectionOne
          topics={testSeries?.data?.data.topics}
          questions={testSeries?.data?.data.question}
        />
        {/* <Stack direction="column" spacing={3} useFlexGap flexWrap="wrap"> */}
        {/* <TSectionTwo sets={testSeries?.data?.categories} /> */}
        {/* </Stack> */}
      </Stack>
    </Container>
  );
};

export default ViewTopicDetail;
