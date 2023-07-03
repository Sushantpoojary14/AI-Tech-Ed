import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";
import UseGet from "../../../Hooks/UseGet";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { Button, Container, Stack, Typography } from "@mui/material";
import ProfileComponent from "../../../Components/BodyComponent/ProfileComponent";
import { AppContext } from "../../../Context/AppContext";
import Details from "./Details";
import { BButton, WButton } from "../../../Components/Common/Button";
import {
  Header1,
  Header2,
  Header3,
  Header4,
} from "../../../Components/Common/HeaderText";
import { Link } from "react-router-dom";

interface Detail {
  title: string;
  data: string;
}

const StudentDetails = () => {
  const { admin } = AppContext();
  const { studentid } = useParams();

  const { dataSubmit } = UserContext();

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["adminData", dataSubmit],
    queryFn: UseGet("https://dummyjson.com/users/3"),
  });

  if (isLoading) {
    return <LoadingBar />;
  }

  //   const details: Detail[] = [
  //     { title: "Name", data: data.firstName },
  //     { title: "User id", data: data.id },
  //     { title: "Birth date", data: data.birthDate },
  //     { title: "Email", data: data.email },
  //     { title: "Phone number", data: data.phone },
  //     { title: "Total Test Answered", data: data.phone },
  //     { title: "Number Of Completed Test", data: data.phone },
  //   ];
  const studentData = {
    id: "12345",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    birthDate: "1990-01-01",
    state: "California",
    city: "Los Angeles",
    totalTestsAnswered: 50,
    completedTests: 35,
    incompleteTests: 5,
    missedTests: 5,
    remainingTests: 5,
  };
  return (
    <Container maxWidth="lg">
      {/* <ProfileComponent admin={admin} details={details} /> */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={2}
        marginTop={2}
      >
        {/* <Typography variant="h6">Student Details</Typography> */}
        <Header1 header="Student Details" />
        <Stack direction="row" spacing={1}>
          <Link to={`testanswered`}>
            <WButton name="View Test Answered" css={{ height: "3rem" }} />
          </Link>
          {/* <Button variant="outlined" color="primary">
            View Test Answered
          </Button> */}
          {/* <Button variant="outlined" color="primary">
            Back
          </Button> */}
          <BButton name="Back" css={{ height: "3rem" }} />
        </Stack>
      </Stack>
      <Details student={studentData} />
    </Container>
  );
};

export default StudentDetails;
