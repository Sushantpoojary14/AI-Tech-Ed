import { useQuery } from "@tanstack/react-query";
import UseGet from "../../../Hooks/UseGet";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { UserContext } from "../../../Context/UserContext";
import ProfileComponent from "../../../Components/BodyComponent/ProfileComponent";
import { AppContext } from "../../../Context/AppContext";
import tokenAxios from "../../../Hooks/TokenAxios";

interface Detail {
  title: string;
  data: string | number;
}

const ProfileIndex = () => {
  const { handlePEOpen } = UserContext();
  const { user } = AppContext();
  const { data ,isLoading} = useQuery(["user-data", user ], async () => {
    return await tokenAxios.get("/user");
  });

  const details: Detail[] = [
    { title: "Name", data: data?.data.name },
    { title: "User id", data: data?.data.id },
    { title: "Birth date", data: data?.data.DOB ? user?.DOB : "" },
    { title: "Email", data: data?.data.email },
    { title: "Phone number", data: data?.data.phone },
  ];
  if(isLoading){
    return <LoadingBar/>
  }
  return <ProfileComponent details={details} func={handlePEOpen} />;
};

export default ProfileIndex;
