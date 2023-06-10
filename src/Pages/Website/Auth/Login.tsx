import { Box, Typography } from '@mui/material'
import Input from '../../../Components/Common/Input'
import { useForm, SubmitHandler } from 'react-hook-form';
import { OButton2 } from '../../../Components/Common/Button';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (para_data: Object) => {

    console.log(para_data);

  }
  return (

    <Box sx={{ width: { lg: '440px' }, height: { lg: '410px' }, display: 'flex', flexDirection: 'column', px: '30px' }}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Input label="Email" val={false} type="email" reg={register("email")} css={{ my: '20px' }} />
        <Input label="Password" val={false} type="password" reg={register("password")} css={{ my: '20px' }} />
        <Typography sx={{ color: '#FA8128', textAlign: 'right' }}>Forgot Password?</Typography>
        <OButton2 name="Login" css={{ my: '30px', width: '100%' }} />
      </form>
    </Box>
  )
}

export default Login
