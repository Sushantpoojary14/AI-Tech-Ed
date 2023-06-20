
import { useQuery } from '@tanstack/react-query';
import UseGet from '../../../Hooks/UseGet';
import LoadingBar from '../../../Components/Headers/LoadingBar';
import { OButton } from '../../../Components/Common/Button';
import { UserContext } from '../../../Context/UserContext';
import ProfileComponent from '../../../Components/BodyComponent/ProfileComponent';

interface Detail {
    title: string;
    data: string;
}

const ProfileIndex = () => {
    const { handlePEOpen, dataSubmit } = UserContext();

    const { isLoading, data, refetch } = useQuery({
        queryKey: [dataSubmit], queryFn: UseGet('https://dummyjson.com/users/1'),
    })

    if (isLoading) {
        return <LoadingBar />
    }

    const details: Detail[] = [
        { title: 'Name', data: data.firstName }, { title: 'User id', data: data.id }, { title: 'Birth date', data: data.birthDate }, { title: 'Email', data: data.email }, { title: 'Phone number', data: data.phone }
    ];



    return (
      <ProfileComponent details={details} func={handlePEOpen}/>
    )
}

export default ProfileIndex


