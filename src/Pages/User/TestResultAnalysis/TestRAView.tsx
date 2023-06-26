import { Container, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import ViewFirstSection from './Components/ViewFirstSection';
import ViewFourthSection from './Components/ViewFourthSection';
import ViewSecondSection from './Components/ViewSecondSection';
import ViewThirdSection from './Components/ViewThirdSection';

const TestRAView = () => {
    
    
    return (
        <Container maxWidth="xl" >
            <Stack direction="row" spacing={3}  flexWrap="wrap" sx={{ width: '100%' }}>
                <ViewFirstSection />
                <Stack direction="column" spacing={3} useFlexGap flexWrap="wrap" >
                    <ViewSecondSection />
                    <ViewThirdSection />
                    <ViewFourthSection />
                </Stack>
            </Stack>
        </Container>
    )
}

export default TestRAView
