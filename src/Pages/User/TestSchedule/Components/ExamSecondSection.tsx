import { Card, Box } from "@mui/material"
import { Stack } from "@mui/system"
import { ParaText1 } from "../../../../Components/Common/ParaText"
import img1 from "../../../../Assets/images/Icon/answered.jpg";
import img2 from "../../../../Assets/images/Icon/not_answered.jpg";
import img3 from "../../../../Assets/images/Icon/not_visted.jpg";
import img4 from "../../../../Assets/images/Icon/Review.jpg";

const ExamSecondSection = () => {
    return (
        <Card sx={{ boxShadow: '6px 6px 20px 0px #808080', mb: '15px', display: 'flex', flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' }, p: '20px', width: '435px' }}>
            <Box>
                <Stack  direction="row"  spacing={2} marginBottom="10px">
                    <img src={img1} style={{width:'30px',height:'30px'}}/>
                    <ParaText1 text="Answered" />
                </Stack>
                <Stack direction="row" spacing={2} marginBottom="10px"> 
                <img src={img2} style={{width:'30px',height:'30px'}}/>
                    <ParaText1 text="Not Answered" />
                </Stack>
                <Stack direction="row"  spacing={2} marginBottom="10px">
                <img src={img3} style={{width:'30px',height:'30px'}}/>
                    <ParaText1 text="Not Visited" />
                </Stack>
                <Stack direction="row" spacing={2} marginBottom="10px">
                <img src={img4} style={{width:'30px',height:'30px'}}/>
                    <ParaText1 text="Marked for Review" />
                </Stack>

            </Box>
            {/* <Stack>
                <ParaText1 text="Answered" />
                <ParaText1 text="Answered" />
            </Stack> */}
        </Card>
    )
}

export default ExamSecondSection
