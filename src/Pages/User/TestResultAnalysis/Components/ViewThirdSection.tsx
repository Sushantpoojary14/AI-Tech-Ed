import { Card, Divider } from '@mui/material'

import { ParaText3 } from '../../../../Components/Common/ParaText'

const ViewThirdSection = () => {
  return (
    <Card sx={{
        boxShadow: '6px 6px 20px 0px #808080', my: '15px',
        width: { lg: '1020px', md: '900px', sm: '900px', xs: '340px' }, height: { lg: '286px', md: '286px', sm: '286px', xs: '286px' }, p: '14px'
    }}>
        <ParaText3 text="Time Taken per Question" />
        <Divider sx={{ borderColor: '#FA8128', borderWidth: '3px', borderRadius: '3px', width: '200px' }} />
    </Card>
  )
}

export default ViewThirdSection
