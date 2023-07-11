import { useQuery } from "@tanstack/react-query";
import UseGet from "../../../Hooks/UseGet";
import LoadingBar from "../../../Components/Headers/LoadingBar";
import { UserContext } from "../../../Context/UserContext";
import ProfileComponent from "../../../Components/BodyComponent/ProfileComponent";
import { AppContext } from "../../../Context/AppContext";

interface Detail {
  title: string;
  data: any;
}

const ProfileIndex = () => {
  const { handlePEOpen, dataSubmit } = UserContext();
    const { user } = AppContext();

console.log( user);

  const details: Detail[] = [
    { title: "Name", data: user?.name },
    { title: "User id", data: user?.id },
    { title: "Birth date", data: user?.DOB ? user?.DOB : "" },
    { title: "Email", data: user?.email },
    { title: "Phone number", data: user?.phone },
  ];

  return <ProfileComponent details={details} func={handlePEOpen} />;
};
  return <ProfileComponent details={details} func={handlePEOpen} />;
};

export default ProfileIndex;
export default ProfileIndex;
