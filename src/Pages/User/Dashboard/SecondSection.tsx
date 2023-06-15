import { Card, Container } from '@mui/material';
import { Header1 } from '../../../Components/Common/HeaderText';

const SecondSection = () => {
    return (
        <Container maxWidth="xl" sx={{ my: '50px' }}>
            <Header1 header="PERFORMANCE ANALYSIS" />
            <Card sx={{ height: '320px', boxShadow: '5px 5px 20px 0px #808080', my:'15px'}}>

            </Card>
        </Container >
    )
}

export default SecondSection
