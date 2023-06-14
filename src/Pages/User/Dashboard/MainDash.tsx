import { Stack } from '@mui/material';
import { Header1 } from '../../../Components/Common/HeaderText';
import FirstSection from './FirstSection';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';
const MainDash = () => {
    return (
        <>
            <Stack direction="row" sx={{ my: '8px',justifyContent:'center'}} >
                <DashboardIcon sx={{
                    height: '28px',
                    width: '28px',
                    color: '#FA8128',
                    mx: '8px'
                }} />
                <Header1 header="DashBoard" />
            </Stack>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection/>
            <SixthSection/>
        </>
    )
}

export default MainDash
