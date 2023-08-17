import { Container, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import SectionOne from "./TSectionOne";
import { useQuery } from "@tanstack/react-query";
import TSectionOne from "./TSectionOne";
import adminTokenAxios from "../../../../../../Hooks/AdminTokenAxios";


const ViewTopicDetail = () => {
  const { topicId } = useParams();
console.log(topicId);

  const testSeries = useQuery({
    queryKey: ["TestSeriesTopics", topicId],
    queryFn: async () => {

      return await adminTokenAxios.get(
          `admin/show-topics-details/${topicId}`
        );
     

    },
  });

  console.log(testSeries?.data?.data);
  

  if (testSeries.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg">
      <Stack
        mt={2}
        // direction="row"
        spacing={2}
        // flexWrap="wrap"
        // sx={{ width: "100%" }}
      >
        <TSectionOne topics={testSeries?.data?.data.topics} questions={testSeries?.data?.data.question}/>
        {/* <Stack direction="column" spacing={3} useFlexGap flexWrap="wrap"> */}
        {/* <TSectionTwo sets={testSeries?.data?.categories} /> */}
        {/* </Stack> */}
      </Stack>
    </Container>
  );
};

export default ViewTopicDetail;
