import { Box, Container } from '@mui/material'
import { useQuery } from '@tanstack/react-query';
import { BButton2 } from '../../../Components/Common/Button';
import { Header1 } from '../../../Components/Common/HeaderText'
import SelectBox from '../../../Components/Common/Select'
import UseGet from '../../../Hooks/UseGet';
import { AppContext } from '../../../Context/AppContext';
import TestSection from './components/TestCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingBar from '../../../Components/Headers/LoadingBar';
import { CartContext } from '../../../Context/CartContext';

interface option {
    name: string;
    value: number;
}

const options: option[] = [
    { name: 'OC Online Trial test', value: 1 },
    { name: 'Selective Test', value: 2 }
]


const SecondSection = () => {
    const [selectVal, setSelectVal] = useState<number>(1);
    const { cart } = CartContext();
    const { isLoading, data, refetch } = useQuery({
        queryKey: [selectVal], queryFn: UseGet('https://dummyjson.com/products?limit=6'),
    })

   
    if(isLoading){
        return <LoadingBar />
    }
    return (
        <>
            <Container maxWidth={false} sx={{ width: '98%', py: '15px', }} id="product">
                <Box style={{ display: 'flex', alignItems: 'left', width: '100%', }}>
                    <Header1 header='Buy Test Series' />
                    <SelectBox name='choose test type' selectName='test_type' options={options}
                        func={setSelectVal} />
                </Box>

                <Box sx={{ display: 'grid', my: '40px', gridTemplateColumns: { md: 'auto auto', sm: 'auto auto', lg:'auto auto auto', xs: 'auto' }, justifyContent: 'space-between', width: '100%' }}>
                    {data?.products && data.products.map((item: any, key: number) => {
                        return  <TestSection data={item} key={key}/>
                    })}
                </Box>

            </Container>
            <Box sx={{ width: '100%', height: '100px', textAlign: 'center' }}>
                <Link to='/product'>
                    <BButton2 name='SHOW MORE' />
                </Link>
            </Box>
        </>
    )
}

export default SecondSection
