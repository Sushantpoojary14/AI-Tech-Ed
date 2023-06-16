import { Card, CardContent, Container, Stack, Paper, styled, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Header1, Header2 } from '../../../Components/Common/HeaderText';
import LoadingBar from '../../../Components/Headers/LoadingBar';
import UseGet from '../../../Hooks/UseGet';
const css = `
  text-align: center;
  border-radius: 0px;
  padding:2px;
   width:88px;
   height:48px;
`;

// const Item1 = styled(Paper)`
//   ${css}
//   border-bottom: 1px solid #1D1D1D;
//   border-top:  1px solid #1D1D1D;
//   border-left:   1px solid #1D1D1D;
// `;

const Item2 = styled(Paper)`
  ${css}
  border: 1px solid #1D1D1D;
`;

// const Item3 = styled(Paper)`
//   ${css}
//   border-bottom: 1px solid #1D1D1D;
//   border-top:  1px solid #1D1D1D;
//   border-right:   1px solid #1D1D1D;
// `;
type content={

  title: string,
  name: string,
}

const card_content:content[] = [
  { title: 'TOTAL EXAM', name: '1000',  },
  { title: 'COMPLETED EXAMS', name: '100' },
  { title: 'INCOMPLETED EXAMS', name: '100'},
  { title: 'REMAINING EXAMS', name: '100' },
]

const FirstSection = () => {

  const { isLoading, data, refetch } = useQuery({
    queryKey: [], queryFn: UseGet('https://dummyjson.com/products?limit=6'),
})


if(isLoading){
    return <LoadingBar />
}
  return (
    <Container maxWidth="xl" sx={{ display: 'grid', 
    gridTemplateColumns: {lg:'auto auto auto auto',md:'auto auto auto auto',sm:'auto auto ',xs:'auto'},gridGap: {lg:'20px',md:'10px',sm:'20px',xs:'20px'},my:'30px' }}>
      {card_content.map((item:content,key) => {
        return (<Card sx={{
          Width: '239px', height: '220px', boxShadow: '6px 6px 20px 0px #808080',
          borderBottom: '3px solid #FA8128', borderRight: '3px solid #FA8128',
        }} key={key}>
          <CardContent sx={{ width: '239px', m: 'auto',textAlign:'center' ,alignItems:'center'}}>
            <Header1 header={item.title} css={{ mx:'auto', width:'151px',my:'5px'}} />
            <Stack direction="row" sx={{ height: '60px', fontWeight: '400',justifyContent:'center' }}>
              {/* <Item1><Header2 header={item.name} />
                <Typography sx={{ fontSize: '9px', m: 0 }}>DYNAMIC EXAMS</Typography>
              </Item1> */}
              <Item2>
                <Header2 header={item.name} />
                <Typography sx={{ fontSize: '9px',color:'#000000'  }}> CUSTOM EXAMS</Typography>
              </Item2>
              {/* <Item3><Header2 header={item.name} />
                <Typography sx={{ fontSize: '9px', m: 0 }}>DESCRIPTIVE EXAMS</Typography>
              </Item3> */}
            </Stack>
          </CardContent>

        </Card>)
      })
      }
    </Container>
  )
}

export default FirstSection
