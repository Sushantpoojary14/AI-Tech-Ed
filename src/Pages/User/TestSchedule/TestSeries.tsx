import { Stack, Typography, Card, Container } from '@mui/material';
import { Header1 } from '../../../Components/Common/HeaderText';
import BarChartIcon from '@mui/icons-material/BarChart';
import { ParaText1, ParaText3 } from '../../../Components/Common/ParaText';
import { BButton } from '../../../Components/Common/Button';
import { useQuery } from '@tanstack/react-query';
import UseGet from '../../../Hooks/UseGet';
import { useParams, Link } from 'react-router-dom';
import LoadingBar from '../../../Components/Headers/LoadingBar';
const TestSeries = () => {

    const params = useParams();

    const { isLoading, data, refetch } = useQuery({
        queryKey: [], queryFn: UseGet('https://dummyjson.com/products/1'),
    });
    
    if (isLoading) {
        return <LoadingBar />
    }
    return (
        <Container maxWidth="xl">
            <Stack direction="row" sx={{ my: '18px', justifyContent: 'center', mx: 'auto', pr: { lg: '100px', xs: '0px', sm: '100px', md: '100px' } }}>
                <BarChartIcon sx={{
                    height: '28px',
                    width: '28px',
                    color: '#FA8128',
                    mx: '8px',
                    my: 'auto'
                }} />
                <Header1 header="TEST SERIES" />
            </Stack>
            <Card sx={{ boxShadow: '6px 6px 20px 0px #808080', my: '15px', display: 'flex', justifyContent: 'space-between', py: '20px' }}>
                <Stack flexDirection="column" spacing={2} paddingX={6} paddingY={4}>

                    <Header1 header={data.title} />
                    <ParaText3 text="Description" />
                    <ParaText1 text={data.description} css={{ maxWidth: '327px' }} />
                    <Stack direction="row" spacing={9} >
                        <ParaText3 text="validity" />
                        <ParaText1 text="  23 June 2023  -   24 July 2023" />
                    </Stack>
                    <ParaText3 text="Marks Distribution" />
                    <Stack direction="row" spacing={9} >
                        <ParaText1 text="Reading:" />
                        <ParaText1 text="30" />
                    </Stack>

                    <Stack direction="row" spacing={3}>
                        <ParaText1 text="Thinking Skills:" />
                        <ParaText1 text="30" />
                    </Stack>
                    <Stack direction="row" spacing={4}>
                        <ParaText1 text="Mathematical:" />
                        <ParaText1 text="30" />
                    </Stack>
                    <Link to={`/user/Test-schedule/Exam-section/1`}>
                        <BButton name="ANSWER TEST" css={{ width: '256px', height: '58px' }} />
                    </Link>
                </Stack>
            </Card>
        </Container>
    )
}

export default TestSeries
