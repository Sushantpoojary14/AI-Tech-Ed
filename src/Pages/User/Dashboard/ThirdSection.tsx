import { Card, Container, TableContainer, Table } from "@mui/material"
import { Header1 } from "../../../Components/Common/HeaderText"
import { TableHeader,TableData } from "../../../Components/Common/Table"
import LoadingBar from '../../../Components/Headers/LoadingBar';
import UseGet from '../../../Hooks/UseGet';
import { useQuery } from '@tanstack/react-query';


const header =['Test name','Valid from','Valid till'];
const tableData =[ 
    {id:'1',name:'test1',valid_from:'29/9/2022',valid_till:'29/10/2022'},
    {id:'2',name:'test2',valid_from:'29/10/2022',valid_till:'29/12/2022'}];



const ThirdSection = () => {
    const { isLoading, data, refetch } = useQuery({
        queryKey: [], queryFn: UseGet('https://dummyjson.com/products?limit=6'),
    });

    if(isLoading){
        return <LoadingBar />
    }
    return (
        <Container maxWidth="xl">
            <Header1 header="PERFORMANCE ANALYSIS" />
            <Card sx={{ boxShadow: '5px 5px 20px 0px #808080', my: '15px' }}>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }}>
                            <TableHeader header={header}/>
                            <TableData data={tableData} url="/user/Test-result-analysis"/>
                    </Table>
                </TableContainer>
            </Card>
        </Container>
    )
}

export default ThirdSection

