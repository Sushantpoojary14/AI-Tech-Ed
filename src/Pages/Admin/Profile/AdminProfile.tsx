import { Container } from "@mui/material";
import ProfileComponent from "../../../Components/BodyComponent/ProfileComponent";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { useQuery } from "@tanstack/react-query";
import UseGet from "../../../Hooks/UseGet";
import { UserContext } from "../../../Context/UserContext";

interface Detail {
  title: string;
  data: string;
}

const AdminProfile = () => {
  const { handlePEOpen, dataSubmit } = UserContext();

  const { isLoading, data, refetch } = useQuery({
    queryKey: [dataSubmit],
    queryFn: UseGet("https://dummyjson.com/users/2"),
  });

  if (isLoading) {
    return <LoadingBar />;
  }

  const details: Detail[] = [
    { title: "Name", data: data.firstName },
    { title: "User id", data: data.id },
    { title: "Birth date", data: data.birthDate },
    { title: "Email", data: data.email },
    { title: "Phone number", data: data.phone },
  ];
  return (
    <Container maxWidth="lg">
      <ProfileComponent details={details} func={handlePEOpen} />
    </Container>
  );
};

export default AdminProfile;
