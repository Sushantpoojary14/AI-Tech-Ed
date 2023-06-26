import { Container, Stack, Button, Box } from "@mui/material"
import { Header1 } from "../../../Components/Common/HeaderText"
import { ParaText3, ParaText4 } from "../../../Components/Common/ParaText"
import ExamFirstSection from "./Components/ExamFirstSection"
import ExamSecondSection from "./Components/ExamSecondSection"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
const Exam_Section = () => {
    return (
        <Container maxWidth="xl">
            <Stack sx={{ width: '100%',my:'5px' }} direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }}>
                <Header1 header="Section" />
                <ParaText3 text="Time Remaining: 30.30" css={{ margin: 'auto' }} />
                <Stack direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }} spacing={2}>
                    <Button variant="outlined" sx={{ width: '45px', height: '45px', color: '#FA8128',  border: '1px solid #FA8128',  backgroundColor: '#FFFFFF', marginY: 'auto', }}>
                        <Person2OutlinedIcon sx={{ width: '34px', height: '34px' }} />
                        
                    </Button>
                    <Box>
                            <ParaText3 text="James" css={{ fontWeight: '500' }} />
                            <ParaText3 text="OADE3" css={{ fontWeight: '500' }} />
                    </Box>
                </Stack>
            </Stack>
            <Stack direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }} spacing={2} sx={{ width: '100%',
            my:'15px' }}>
                <ExamFirstSection />
                <ExamSecondSection />
            </Stack>
        </Container>
    )
}

export default Exam_Section
