import { Header1 } from '../../../Components/Common/HeaderText';
import { Card, Container, Stack, Box } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useState } from 'react';
import SelectBox from '../../../Components/Common/Select';

interface option {
  name: string;
  value: number;
}
const options: option[] = [
  { name: 'OC Online Trial test', value: 1 },
  { name: 'Selective Test', value: 2 }
]
const TestRA = () => {
  const [selectVal, setSelectVal] = useState<number>(1);
  return (
    <><Stack direction="row" sx={{ my: '8px', justifyContent: 'center' }}>
      <BarChartIcon sx={{
        height: '28px',
        width: '28px',
        color: '#FA8128',
        mx: '8px',
        my: 'auto'
      }} />
      <Header1 header="Profile" css={{}} />
    </Stack>
      <Container maxWidth="xl">
        <Card sx={{ boxShadow: '6px 6px 20px 0px #808080', my: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <SelectBox name='choose test type' selectName='test_type' options={options}
                        func={setSelectVal} />

        </Card>
      </Container>
    </>
  )
}

export default TestRA;
