import { ParaText1, ParaText3 } from "../../../../Components/Common/ParaText";
import { Container, Stack, Card, Divider, Box } from "@mui/material";
import LoadingBar from "../../../../Components/Headers/LoadingBar";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "../../../../Context/UserContext";
import UseGet from "../../../../Hooks/UseGet";
import { OButton } from "../../../../Components/Common/Button";
import { Link } from "react-router-dom";

interface Detail {
  title: string;
  data: string;
}
const ViewFirstSection = ({ data }: any) => {
  const { handlePEOpen, dataSubmit } = UserContext();

  // const { isLoading, data, refetch } = useQuery({
  //   queryKey: [dataSubmit],
  //   queryFn: UseGet("https://dummyjson.com/users/1"),
  // });

  if (data.isLoading) {
    return <LoadingBar />;
  }

  const details: Detail[] = [
    { title: "Set Name", data: data.data?.set_name },
    { title: "Time Taken", data: data.data?.time_taken },
    { title: "Marks Secured", data: data.data?.total_marks },
    { title: "Total Marks", data: data.data?.total_marks },
    { title: "Percentage", data: data.data?.percentage },
    { title: "Correct Answers", data: data.data?.total_marks },
    { title: "Wrong Answers", data: 35 - data.data?.total_marks },
    { title: "Total Questions", data: 35 },
    { title: "Questions Attempted", data: data.data?.total_answered },
  ];
  return (
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
      <Box sx={{ width: "100%", textAlign: "right" }}>
        <Link to={`/user/Test-result-analysis/solution/${data.id}`}>
          <OButton name="View Solution" css={{ width: "170px" }} />
        </Link>
      </Box>
    </Card>
  );
};

export default ViewFirstSection;
