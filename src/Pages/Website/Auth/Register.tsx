import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import Input from '../../../Components/Common/Input'
import { useForm, SubmitHandler } from 'react-hook-form';
import { OButton2 } from '../../../Components/Common/Button';

type Inputs = {
    email: string;
    password: string;
    phone: string;
    fname: string;
    lname: string;
};


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (para_data: Object) => {
        console.log(para_data);
    }
    return (

        <Box sx={{ width: { lg: '440px' }, height: { lg: '490px' }, display: 'flex', flexDirection: 'column', px: '30px' }}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input label="Email" val={false} type="email" reg={register("email")} />
                <Input label="Phone Number" val={false} type="tel" reg={register("phone")} css={{ my: '30px' }} />
                <Input label="Password" val={false} type="password" reg={register("password")} css={{ my: '30px' }} />
                <Box sx={{ display: "flex", flexWrap: { sm: 'wrap', md: 'nowrap', xs: 'wrap' }, my: '30px' }}>
                    <Input label="First Name" val={false} type="text" reg={register("fname")}
                        css={{ pr: { lg: '10px', md: '10px', sm: '0', xs: '0' }, }} />
                    <Input label="Last Name" val={false} type="text" reg={register("lname")}
                        css={{ pr: { lg: '10px', md: '10px', sm: '0', xs: '0' }, mt: { lg: '0px', md: '0px', sm: '10px', xs: '30px' } }} />
                </Box>
                <FormControlLabel control={<Checkbox defaultChecked />} 
                label="By signing up you agree to our terms and conditions." sx={{fontSize:'14px'}}/>
                <OButton2 name="Login" css={{ my: '20px', width: '100%' }} />
            </form>
        </Box>
    )
}

export default Register